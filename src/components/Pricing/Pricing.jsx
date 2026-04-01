import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
import '../../App.css'

export const Pricing = () => {
  return (
    <div className='py-12 sm:py-16 px-4 sm:px-6 bg-gray-50'>
      
      <div className='text-center mb-10 sm:mb-12'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800'>
          Simple, Transparent Pricing
        </h2>
        <p className='text-gray-500 mt-2 text-sm sm:text-base'>
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch'>

        {/* Starter */}
        <div className='bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:scale-105 hover:border-[#4F39FA] transition-all duration-300'>
          <h3 className='text-lg sm:text-xl font-bold text-gray-800'>Starter</h3>
          <p className='text-gray-500 text-sm mt-1'>Perfect for getting started</p>
          <div className='mt-4 mb-6'>
            <span className='text-3xl sm:text-4xl font-bold text-gray-800'>$0</span>
            <span className='text-gray-500 text-sm'>/Month</span>
          </div>
          <ul className='Checkmark flex flex-col space-y-2 text-sm text-gray-600 mb-8'>
            <li><IoMdCheckmark className='text-green-400' /> Access to 10 free tools</li>
            <li><IoMdCheckmark className='text-green-400' /> Basic templates</li>
            <li><IoMdCheckmark className='text-green-400' /> Community support</li>
            <li><IoMdCheckmark className='text-green-400' /> 1 project per month</li>
          </ul>
          <button className='w-full py-3 rounded-xl bg-gradient-to-r from-[#4F39FA] to-[#9514FA] text-white font-semibold'>
            Get Started Free
          </button>
        </div>

        {/* Pro */}
        <div className='relative bg-gradient-to-b from-[#4F39FA] to-[#9514FA] rounded-2xl p-6 sm:p-8 text-white md:scale-105 shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300'>
          <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-800 text-xs font-semibold px-4 py-1 rounded-full'>
            Most Popular
          </div>
          <h3 className='text-lg sm:text-xl font-bold'>Pro</h3>
          <p className='text-white/70 text-sm mt-1'>Best for professionals</p>
          <div className='mt-4 mb-6'>
            <span className='text-3xl sm:text-4xl font-bold'>$29</span>
            <span className='text-white/70 text-sm'>/Month</span>
          </div>
          <ul className='space-y-2 text-sm mb-8'>
            <li>✓ Access to all premium tools</li>
            <li>✓ Unlimited templates</li>
            <li>✓ Priority support</li>
            <li>✓ Unlimited projects</li>
            <li>✓ Cloud sync</li>
            <li>✓ Advanced analytics</li>
          </ul>
          <button className='w-full py-3 rounded-xl bg-white text-[#4F39FA] font-semibold'>
            Start Pro Trial
          </button>
        </div>

        {/* Enterprise */}
        <div className='bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:scale-105 hover:border-[#4F39FA] transition-all duration-300'>
          <h3 className='text-lg sm:text-xl font-bold text-gray-800'>Enterprise</h3>
          <p className='text-gray-500 text-sm mt-1'>For teams and businesses</p>
          <div className='mt-4 mb-6'>
            <span className='text-3xl sm:text-4xl font-bold text-gray-800'>$99</span>
            <span className='text-gray-500 text-sm'>/Month</span>
          </div>
          <ul className='Checkmark space-y-2 text-sm text-gray-600 mb-8'>
            <li><IoMdCheckmark className='text-green-400' /> Everything in Pro</li>
            <li><IoMdCheckmark className='text-green-400' /> Team collaboration</li>
            <li><IoMdCheckmark className='text-green-400' /> Custom integrations</li>
            <li><IoMdCheckmark className='text-green-400' /> Dedicated support</li>
            <li><IoMdCheckmark className='text-green-400' /> SLA guarantee</li>
            <li><IoMdCheckmark className='text-green-400' /> Custom branding</li>
          </ul>
          <button className='w-full py-3 rounded-xl bg-gradient-to-r from-[#4F39FA] to-[#9514FA] text-white font-semibold'>
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  )
}