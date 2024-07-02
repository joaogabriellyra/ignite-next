'use client'

import styles from './post.module.css';
import Link from 'next/link';
import Comment from './comment';
import Avatar from './avatar';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { useState } from 'react';

export default function Post({post: {author: { avatarUrl, name, role }, content, publishedAt }} :any ) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<(any)[]>([]);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'de' u 'às' HH:mm", { locale: ptBR});
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleInput(value: string) {
    setComment(value);
  }  

  function handlePostComment(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const commentsToPost = [...comments, comment]
    
    setComments([...comments, comment]);
    setComment('');
  }

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

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {content?.map(({type, content}:any, index: string) => (
          type === 'paragraph' ? <p key={index}>{content}</p> : <p key={index}><Link href="#">{content}</Link></p>
        ))}
      </div>

      <form onSubmit={handlePostComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentário'
          required
          value={comment}
          onChange={({target: { value }}) => handleInput(value)}
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((commentPosted, index) => (
          <Comment key={index} commentForPost={commentPosted}/>
        ))}
      </div>

    </article>
  )
}