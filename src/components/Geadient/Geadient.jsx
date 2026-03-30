import React from 'react'

export const Geadient = () => {
  return (
    <div className=' space-y-5 w-full py-10 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex flex-col items-center text-center'>
        <h1 className='font-bold text-3xl text-white'>Ready to Transform Your Workflow?</h1>
        <p className=' text-cyan-50 text-[13px]'>Join thousands of professionals who are already using Digitools to work smarter.  <br></br>Start your free trial today.</p>
        <div className=" flex gap-5">
            <a className="px-2 py-1 bg-white flex justify-center items-center rounded-2xl">
  <span className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-[12px]">
    Explore Products
  </span>
</a>
            <a className='text-white text-[12px] border-2 rounded-2xl px-2 py-1 border-white'>View Pricing</a>
        </div>
        <p className=' text-cyan-50 text-[13px]'>14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  )
}
