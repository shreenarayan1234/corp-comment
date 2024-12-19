import React from 'react'
import Pattern from './Pattern'
import Logo from './Logo'
import PageHeading from './PageHeading'
import FeedbackForm from './FeedbackForm'
import {useFeedbackItemsContext } from './FeedbackItemsContextProvider'

const Header = () => {
  const {onAddToList} = useFeedbackItemsContext();
  return (
    <>
    <header className='h-[277px] bg-[#121618] flex flex-col items-center justify-center relative z-[999] shadow-slate-700 pb-[3px]'>
         
          <Pattern/>
          <Logo/>
          <PageHeading/>
          <FeedbackForm onAddToList={onAddToList}/>

    </header>
    </>
  )
}

export default Header