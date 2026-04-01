import React from 'react'
import shoppingCart from '../../assets/shoppingCart.png'

export const Navbar = ({cart , setselectType}) => {
  return (
    <div className='max-w-6xl mx-auto px-4 '>
      <div className="navbar bg-base-100 shadow-sm">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
            </ul>
          </div>

          <a className="btn btn-ghost text-xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button onClick={() => setselectType("products")}>
                Products
              </button>
            </li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-2 sm:gap-4 md:gap-7">

          <div 
            className="relative cursor-pointer"
            onClick={() => setselectType("cart")}
          >
            <img src={shoppingCart} />

            {
              cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 py-0.2 rounded-full">
                  {cart.length}
                </span>
              )
            }
          </div>

          <h1 className='hidden sm:block'>Login</h1>

          <a className="btn rounded-2xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 sm:px-6 py-3 rounded-full text-sm sm:text-base">
            Get Started
          </a>

        </div>

      </div>
    </div>
  )
}