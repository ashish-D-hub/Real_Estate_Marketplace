import React from 'react'
import {FaSearch} from 'react-icons/fa';
// To use the icons, you need to install react-icons package
// npm install react-icons --save
import {Link} from 'react-router-dom';



export default function Header() {
  return (
    <header className='bg-gray-200 shadow-md'>
    <div className='  flex justify-between items-center max-w-7xl mx-auto p-4'>
      <Link to='/' className='flex items-center gap-2'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
        <span className='text-green-600'>Real_Estate </span>
        <span className='text-blue-600'>_Marketplace </span>
      </h1>
      </Link>


      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input   type="text" placeholder='Search...  ' className='bg-transparent focus:outline-none w24 sm:w-64'    />
        {/* <button type='submit' >Search</button> */}
        <FaSearch className='text-gray-500 cursor-pointer hover:text-gray-700' size={20} />
      </form>
      <ul className='flex gap-4 text-sm sm:text-base'>
        <Link to='/' className='flex items-center gap-2'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        </Link>
        <Link to='/about' className='flex items-center gap-2'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
        </Link>
        <Link to='/sign-in' className='flex items-center gap-2'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Sign in</li>
        </Link>
      </ul>
    </div>
    </header>
  )
}
