import React from 'react'

export const Rating = () => {
  return (
    <div className='flex items-center justify-around bg-gradient-to-r from-[#4F39FA] to-[#9514FA] py-5 px-5 mt-[85px]'>
  
  <div className='text-center text-white'>
    <h2 className='text-4xl font-bold'>50K+</h2>
    <p className='text-sm mt-1'>Active Users</p>
  </div>

  <div className='w-[1px] h-12 bg-white opacity-40'></div>

  <div className='text-center text-white'>
    <h2 className='text-4xl font-bold'>200+</h2>
    <p className='text-sm mt-1'>Premium Tools</p>
  </div>

  <div className='w-[1px] h-12 bg-white opacity-40'></div>

  <div className='text-center text-white'>
    <h2 className='text-4xl font-bold'>4.9</h2>
    <p className='text-sm mt-1'>Rating</p>
  </div>

</div>
  )
}
