import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container'>
        <h1 className='text-3xl text-red-400 font-bold underline'>
          Hello world!
        </h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className='flex space-x-3 mt-5'>
          <div className='link'>
            <Link href='./about'>
              <h3>關於我 &rarr;</h3>
              <p>我討厭Typescript</p>
            </Link>
          </div>

          <div className='link'>
            <Link href='./todo/picPractice'>
              <h3>picPractice &rarr;</h3>
              <p>我討厭Typescript</p>
            </Link>
          </div>

          <div className='link'>
            <Link href='./data'>
              <h3>data &rarr;</h3>
              <p>我討厭Typescript</p>
            </Link>
          </div>

          <div className='link'>
            <Link href='./posts/ssg-ssr'>
              <h3>ssg-ssr &rarr;</h3>
              <p>我討厭Typescript</p>
            </Link>
          </div>

          <div className='link'>
            <Link href='./posts/preRendering'>
              <h3>pre-Rendering &rarr;</h3>
              <p>我討厭Typescript</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
