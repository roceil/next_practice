import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'
import mountain from '../../public/Img/mountain.jpg'
export default function picPractice() {
  return (
    <>
      <Head>
        <title>這是一個圖片練習</title>
      </Head>
      <Script src='https://example.com/script.js' strategy='lazyOnload' />
      <div className='container'>
        <Image src={mountain} width={1000} height={600} />
        <div className='my-4'>圖片練習</div>
        <div className='link'>
          <Link href='/'>
            <h3>回家 &rarr;</h3>
            <p>我討厭Typescript</p>
          </Link>
        </div>
      </div>
    </>
  )
}
