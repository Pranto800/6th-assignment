import React from 'react'
import img1 from '../../assets/01.png'
import user from '../../assets/user.png'
import img2 from '../../assets/02.png'
import Package from '../../assets/Package.png'
import img3 from '../../assets/03.png'
import rocket from '../../assets/rocket.png'

export const MidSection = () => {
  return (
    < >
     <div>
        <div>
            <h1 className='font-bold text-3xl '>Get Started in 3 Steps</h1>
            <p className='text-[#627382] text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className='grid grid-cols-3'>
            <div className='w-[320px] h-[300px] bg-white/60 flex items-center text-accent rounded-3xl shadow-lg p-[20px] relative'>
                   <img src={img1} className='w-[30px] h-[30px] absolute top-2 right-2 mt-2.5 ' ></img>
                  <div className='flex flex-col justify-center text-center items-center'>
                    <img src={user} className='w-[50px] h-[50px] bg-[url(${Ellipse})] '></img>
                    <h2 className='text-[#101727] font-bold text-[20px]'>Create Account</h2>
                    <p className='text-[#627382] text-[14px]'>Sign up for free in seconds. No credit card <br></br>required to get started.</p>
                  </div>
            </div>


            <div className='w-[320px] h-[300px] bg-white/60 flex items-center text-accent rounded-3xl shadow-lg p-[20px] relative'>
                   <img src={img2} className='w-[30px] h-[30px] absolute top-2 right-2 mt-2.5 ' ></img>
                  <div className='flex flex-col justify-center text-center items-center'>
                    <img src={Package} className='w-[50px] h-[50px] bg-[url(${Ellipse})] '></img>
                    <h2 className='text-[#101727] font-bold text-[20px]'>Choose Products</h2>
                    <p className='text-[#627382] text-[14px]'>Browse our catalog and select the tools <br></br>that fit your needs.</p>
                  </div>
            </div>

            <div className='w-[320px] h-[300px] bg-white/60 flex items-center text-accent rounded-2xl shadow-lg p-[20px] relative'>
                   <img src={img3} className='w-[30px] h-[30px] absolute top-2 right-2 mt-2.5 ' ></img>
                  <div className='flex flex-col justify-center text-center items-center'>
                    <img src={rocket} className='w-[50px] h-[50px] bg-[url(${Ellipse})] '></img>
                    <h2 className='text-[#101727] font-bold text-[20px]'>Start Creating</h2>
                    <p className='text-[#627382] text-[14px]'>Download and start using your premium tools immediately.</p>
                  </div>
            </div>
        </div>
     </div>   



    </>
  )
}
