import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
      {children}
      <footer className='footer'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
          className='flex justify-center items-center space-x-10'
        >
          <span>Powered by</span>
          <img src='/vercel.svg' alt='Vercel' />
        </a>
      </footer>
    </div>
  )
}
