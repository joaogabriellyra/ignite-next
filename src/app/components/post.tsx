'use client'

import Image from 'next/image';
import styles from './post.module.css';
import Link from 'next/link';

export default function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Image 
            src='https://github.com/joaogabriellyra.png'
            alt='post owner image'
            width={48}
            height={48}
          />
          <div className={styles.authorInfo}>
            <strong>João Gabriel Lyra</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='28 de junho às 00:44' dateTime='2024-06-28 00:44:55'>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><Link href='#'>jane.design/doctorcare</Link></p>

        <p>
          <Link href='#'>#novoprojeto</Link>{' '}
          <Link href='#'>#nlw</Link>{' '}
          <Link href='#'>#rocketseat </Link>
        </p>
      </div>

      <form onSubmit={() => console.log('oi')} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder='Deixe um comentário'
          required
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}