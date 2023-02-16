import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function NotFound() {
  const router = useRouter()
  const [second, setSecond] = useState(3)

  useEffect(() => {
    const countDown = setInterval((second) => {
      setSecond((prev) => prev - 1)
      if (second === 0) {
        console.log(0)
      }
    }, 1000)
    if (second < 0) {
      clearInterval(countDown)
      router.push("/")
    }
    return () => {
      clearInterval(countDown)
    }
  }, [second])

  return (
    <div className='container flex flex-col space-y-3'>
      <h2 className='text-3xl'>無此頁面</h2>
      <p>
        返回
        <Link href='/' className='text-red-400'>
          首頁
        </Link>
      </p>
      <p>{second}秒後自動跳轉回首頁</p>
    </div>
  )
}
