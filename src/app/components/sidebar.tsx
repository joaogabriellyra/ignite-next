import Image from 'next/image';
import styles from './sidebar.module.css';
import Link from 'next/link';
import Avatar from './avatar';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Image
        className={styles.cover} 
        src='https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='random image'
        width={500}
        height={100}
      />

      <div className={styles.profile}>
        <Avatar 
          src='https://github.com/joaogabriellyra.png'
        />
        <strong>João Gabriel Lyra</strong>
        <span>Web Developer</span>
      </div>

      <footer>

        <Link href='#'>
          Editar seu perfil
        </Link>
      </footer>
    </aside>
  )
}