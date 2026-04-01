import React from 'react'
import Circle from '../../assets/Circle.png'
import Play from '../../assets/Play.png'
import banner from '../../assets/banner.png'

export const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-[60px] md:mt-[85px] place-items-center px-6 md:px-10 gap-8 md:gap-0'>
        <div className='space-y-4 text-center md:text-left'>
            <h1 className='flex items-center justify-center md:justify-start gap-1.5 px-1 py-1 bg-[#EEF2FF] w-[290px] rounded-2xl mx-auto md:mx-0'><img src={Circle}></img>New: AI-Powered Tools Available</h1>
            <h1 className='font-bold text-2xl sm:text-3xl'>Supercharge Your <br></br>Digital Workflow</h1>
            <p className='text-[#627382] text-[14px]'>
                Access premium AI tools, design assets, templates, and productivity<br></br>
                software—all in one place. Start creating faster today.<br></br>
                Explore Products
            </p>
            <div className='flex gap-2.5 items-center justify-center md:justify-start'>
                <a className="btn rounded-2xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-3 rounded-full">Get Started</a>
                <h1 className='flex items-center justify-center px-1 py-1 bg-[#EEF2FF] w-[140px] h-[35px] gap-1.5 border-1 border-[#4F39F6] rounded-2xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'><img src={Play}></img>Watch Demo</h1>
            </div>
        </div>
        <div className='flex justify-center'>
            <img className='h-[250px] sm:h-[300px] md:h-[350px] w-auto' src={banner}></img>
        </div>
    </div>
  )
}