import Link from 'next/link'

// 取得所有物件資料
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default function UserData({ data }) {
  return (
    <div className='container flex flex-col'>
        <Link className='link max-w-[74px] mb-3' href={"/"}>回首頁</Link>

      {data.map((userData) => {
        return (
          <Link href={`/user/${userData.name.toString()}`} className='mb-3 link hover:bg-black hover:text-white'>
            <h2>{userData.name}</h2>
          </Link>
        )
      })}
    </div>
  )
}
