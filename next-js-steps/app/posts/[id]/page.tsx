
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { posts } from '@/app/data/posts'

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
    const ids: string[] = ["1","2","3"];
     return ids.map((id)=> ({id: id}));
 
}


async function getPost(id:string) {
    let post = posts.find((post) => post.id === id);
    return post;
}


export default async function Post({params}: {params: {id: string}}) {
    const {id} = params;
    const post = await getPost(id);
  return (
    <main className={styles.main}>
      <div className={styles.center}>
      <h3>Title: {post?.title}</h3> <br/>
      <p>{post?.desc}</p>
      </div>
      <Link href="/">Home</Link> <br/>
    {/* <button type="button" onClick={()=>router.push('/')}>Home</button> */}
    
    </main>
  )
}
