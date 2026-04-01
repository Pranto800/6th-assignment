import React from 'react'
import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'
import Twitter from '../../assets/Facebook.png'

export const Footer = () => {
  return (
    <>
      <footer className='bg-[#101727] text-white'>
        
       
        <div className='flex flex-wrap justify-center gap-10 md:gap-16 lg:gap-25 items-start container m-auto list-none py-10 md:py-16 px-6 md:px-8'>
          
          <div className='w-full sm:w-auto'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>DigiTools</h2>
            <p className='mt-5 text-[#627382]'>Premium digital tools for creators, <br/>professionals, and businesses. Work smarter <br/> with our suite of powerful tools.</p>
          </div>

          <div>
            <ul className='space-y-2 text-[#627382]'>
              <li className='text-white text-[18px]'>Product</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <ul className='space-y-2 text-[#627382]'>
              <li className='text-white text-[18px]'>Company</li>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          <div>
            <ul className='space-y-2 text-[#627382]'>
              <li className='text-white text-[18px]'>Resources</li>
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className='flex flex-col justify-start'>
            <h2 className='text-white'>Social Links</h2>
            <div className='Social flex items-center gap-2 mt-2'>
              <img src={Facebook} className='w-[30px] h-[30px]'></img>
              <img src={Instagram} className='w-[30px] h-[30px]'></img>
              <img src={Twitter} className='w-[30px] h-[30px]'></img>
            </div>
          </div>

        </div>

        <div className="h-[1px] w-full max-w-[1050px] -mt-[30px] container m-auto bg-gray-600 my-10 px-6"></div>

        <div className='flex flex-col sm:flex-row justify-center sm:justify-around gap-4 items-center text-[#627382] pb-6 px-6 text-center sm:text-left'>
          <h1>© 2026 Digitools. All rights reserved.</h1>
          <div className='flex gap-4 sm:gap-8'>
            <h2>Privacy Policy</h2>
            <h2>Terms of Service</h2>
            <h2>Cookies</h2>
          </div>
        </div>

      </footer>
    </>
  )
}