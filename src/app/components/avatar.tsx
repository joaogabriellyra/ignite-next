import styles from './avatar.module.css'
import Image from 'next/image';
import { clsx } from 'clsx';
import { IAvatar } from '../interfaces';

export default function Avatar({ border = true, src, ...props }: IAvatar) {
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