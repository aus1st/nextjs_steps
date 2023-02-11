import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Post() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
      <h1> Post</h1>
      </div>
      <Link href="/">Home</Link>

    </main>
  )
}
