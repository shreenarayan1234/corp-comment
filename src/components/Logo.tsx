import React from 'react'
import Image from 'next/image'
// import logoimg from '../public/react.png'
import Link from 'next/link'
// import Link from 'next/link'


const Logo = () => {
  return (
    <Link href='/'>
    <Image src={"/react.png"} alt='' height={20} width={50} className=' relative selection:bg-inherit z-1'/>
    </Link>
  )
}

export default Logo