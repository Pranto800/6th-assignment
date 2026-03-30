import React from 'react'
import { FaShoppingCart } from "react-icons/fa";


export const Navbar = () => {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end  gap-7">
    <FaShoppingCart />

    <h1>Login</h1>
    <a className="btn rounded-2xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-3 rounded-full">Get Started</a>
  </div>
</div>
    </div>
  )
}
