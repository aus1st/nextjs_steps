'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Post() {
    const router = useRouter();
  return (
    <main className={styles.main}>
      <div className={styles.center}>
      <h1> Post</h1>
      </div>
      <Link href="/">Home</Link> <br/>
    <button type="button" onClick={()=>router.push('/')}>Home</button>
    </main>
  )
}
