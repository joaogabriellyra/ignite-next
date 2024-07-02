import styles from './avatar.module.css'
import Image from 'next/image';
import { clsx } from 'clsx';

export default function Avatar({src, border = true }: any) {
  return (
    <Image 
      src={src}
      alt="profile picture"
      width={48}
      height={48}
      className={clsx(border ? styles.avatarWithBorder : styles.avatarWithoutBorder)}
    />
  )
}