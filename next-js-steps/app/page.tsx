import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { posts } from './data/posts'

const inter = Inter({ subsets: ['latin'] })

type Post= {
 id:string,
 title:string,
 date:string
}

export default function Ancillary() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
          <h1>Home</h1>      
      </div>
      <div>
        {posts.map(({id,title,date}: Post)=> (
          <>
            <Link key={id} href={`/posts/${id}`}>
              {title} </Link> 
              <br />
            <p>{date}</p>
          </>
        ))}
      </div>
      
      <Link href="/posts">Post</Link>
      <Link href="/ancillary">Ancillary</Link>

      
    </main>
  )
}
