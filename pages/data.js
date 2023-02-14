import React from 'react'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/post'

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function data({ allPostsData }) {
  console.log(allPostsData)
  return (
    <div className='container'>
      <div className='mb-3'>
        {allPostsData.map(({ id }) => {
          return (
            <h2 key={id}>
              <span>ID：</span>
              {id}
            </h2>
          )
        })}
      </div>

      <div className='mb-3'>
        {allPostsData.map(({title}) => {
          return <h2 key={title}><span>Title：</span>{title}</h2>
        })}
      </div>

      <div className='link'>
        <Link href='/'>
          <h3>回家</h3>
        </Link>
      </div>
    </div>
  )
}
