import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container'>
        <h1>關於我</h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className='link'>
          <Link href='/'>
            <h3>回首頁</h3>
          </Link>
        </div>
      </main>
    </div>
  )
}
