import React from 'react'
import Image from 'next/image'

const Pattern = () => {
  return (
    <>
     <Image src="/pattern.svg" alt="Pattern" width={704} height={86} className='absolute top-0 z-0 selection:bg-inherit'/>
    </>
  )
}

export default Pattern