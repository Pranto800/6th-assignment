import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer className='bg-[#101727] text-white'>
        
        {/* Main Content */}
        <div className='flex justify-center gap-25 items-center container m-auto list-none py-16'>
          
          <div>
            <h2 className='text-5xl font-bold'>DigiTools</h2>
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

          <div>
            <h2 className='text-white'>Social Links</h2>
          </div>

        </div>

        <div className="h-[1px] w-[1050px] -mt-[30px] container m-auto bg-gray-600 my-10"></div>
        <div className='flex  justify-around gap-65 items-center text-[#627382] pb-6'>
          <h1>© 2026 Digitools. All rights reserved.</h1>
          <div className='flex gap-8'>
            <h2>Privacy Policy</h2>
            <h2>Terms of Service</h2>
            <h2>Cookies</h2>
          </div>
        </div>

      </footer>
    </>
  )
}