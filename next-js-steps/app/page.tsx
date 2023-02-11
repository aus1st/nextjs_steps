import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Ancillary() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
          <h1> Hello World</h1>      
      </div>
      <Link href="/posts">Post</Link>
      <Link href="/ancillary">Ancillary</Link>

      
    </main>
  )
}
