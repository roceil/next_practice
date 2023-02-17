import useSWR from 'swr'
import Link from 'next/link'
import Image from 'next/image'
const url = 'https://jsonplaceholder.typicode.com/photos'
const getData = async () => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}

const customLoader = ({ src }) => src

export default function UseSwr() {
  const { data, error } = useSWR(url, getData)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div className='container'>
      <Link href={'/'} className='link'>
        回首頁
      </Link>
      <div className='flex flex-wrap gap-2 mt-3'>
        {data.map((photo) => {
          return (
            <Image
              src={photo.url}
              alt='pic'
              loader={customLoader}
              width={150}
              height={150}
            />
          )
        })}
      </div>
    </div>
  )
}
