import Image from 'next/image';
import styles from './header.module.css';
import igniteLogo from '@/app/assets/ignite-logo.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src={igniteLogo}
        alt='Ignite Logo'
        height={32} 
      />
    </header>
  )
}