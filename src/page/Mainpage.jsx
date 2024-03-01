import React from 'react'
import { Home } from './home';
import { UserPage } from './user-page';

const Mainpage = () => {
  return (
    <div className='flex h-[100vh]'>
      <div className='w-[50%] flex flex-col justify-between p-3 overflow-y-scroll bg-green-400'>
        <Home />
      </div>
      <div className='w-[50%] flex flex-col justify-between p-3  bg-yellow-400'>
        <UserPage/> 
      </div>
    </div>
  )
}

export default Mainpage
