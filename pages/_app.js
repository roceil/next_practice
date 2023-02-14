import '../styles/globals.css'
import Layout from './layout/Layout'

export default function App({ Component, pageProps }) {
  return (
    <div className='mt-6'>
      <Component {...pageProps} />
      <Layout/>
    </div>
  )
}
