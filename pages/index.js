import Head from 'next/head'
import styles from '../styles/Home.module.scss'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> Starter!</h1>

  
      
      </main>

        <footer className={styles.footer}>
          <h2>Footer</h2>
        </footer>
    </div>
  )
}
