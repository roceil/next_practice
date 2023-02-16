import Link from 'next/link'
import { useRouter } from 'next/router'
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  const paths = await data.map((userData) => {
    return { params: { name: userData.name.toString() } }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const name = await context.params.name
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?name=${name}`
  )
  const data = await res.json()

  return {
    props: { data }
  }
}
export default function UserDetail({ data }) {
  const router = useRouter
  return (
    <>
      {data.map((userData) => {
        return (
          <div className='container'>
            <ul className=' flex flex-col space-y-4 text-3xl'>
              <li>Name：{userData.name}</li>
              <li>Email：{userData.email}</li>
              <li>Phone：{userData.phone}</li>
            </ul>
            <div className='link mt-4'>
              <Link href={'../user'}>回前頁</Link>
            </div>
          </div>
        )
      })}
    </>
  )
}
