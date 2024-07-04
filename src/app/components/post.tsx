'use client'

import styles from './post.module.css';
import Link from 'next/link';
import Comment from './comment';
import Avatar from './avatar';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { ChangeEvent, InvalidEvent, useState } from 'react';
import { IPostProps } from '../interfaces';

export default function Post({ post }: IPostProps) {
  const {author: { avatarUrl, name, role }, publishedAt, content } = post;

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<(any)[]>([]);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'de' u 'às' HH:mm", { locale: ptBR });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleInput(event: ChangeEvent<HTMLTextAreaElement>) {
    const { target: { value }} = event;
    event.target.setCustomValidity('');
    setComment(value);
  }  

  function handlePostComment(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    const commentsToPost = [...comments, comment]

    setComments([...comments, comment]);
    setComment('');
  }

  function handleInvalidComment(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(content: string) {
    const newComments = comments.filter((comment: string) => content != comment)
    setComments(newComments);
  }

  const isCommentEmpty = comment.length === 0;

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar 
            src={avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time 
          title={publishedDateFormatted} 
          dateTime={publishedAt.toISOString()}
          >{publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content?.map(({type, content}, index: number) => (
          type === 'paragraph' ? <p key={index}>{content}</p> : <p key={index}><Link href="#">{content}</Link></p>
        ))}
      </div>

      <form onSubmit={handlePostComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentário'
          required
          onInvalid={handleInvalidComment}
          value={comment}
          onChange={handleInput}
        />
        <footer>
          <button 
            type='submit' 
            disabled={isCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((commentPosted: string, index) => (
          <Comment 
            key={index} 
            content={commentPosted} 
            deleteComment={deleteComment}
          />
        ))}
      </div>

    </article>
  )
}