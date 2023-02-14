import React from 'react'
import { getAllPostIds, getPostData } from '../../lib/post'
import Link from 'next/link'
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function idPost({ postData }) {
  return (
    <div className='container'>
      <h1>我是ID頁</h1>

      <h2 className='my-4'>
        <span>ID：</span>
        {postData.id}
      </h2>

      <h3 className='my-4'>
        <span>Title：</span>
        {postData.title}
      </h3>

      <p className='my-4'>
        <span>Create Date：</span>
        {postData.date}
      </p>

      <div className='link'>
        <Link href='/'>
          <h3>回家</h3>
        </Link>
      </div>
    </div>
  )
}
