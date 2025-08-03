import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function Navbar() {
  return (
    <nav id='navbar' className='flex pt-2 sticky top-0 left-0 right-0 shadow-md z-50'>
        <div id='leftnavsection' className='flex pt-2'>
            <div id='brandlogo' className='pl-2'>
              <Image
                src="/logo/logo.png"
                alt="Brand Logo"
                width={60}
                height={60}
              />
            </div>
            <div id='brandname' className='text-4xl font-bold pt-2 pl-2'><Link href="/">NexKart</Link></div>
            <div id='searchbar' className='pl-5 pt-2.5'>
              <form>
                <label htmlFor='search-input'></label>
                <input type='text' id='search-input' className='border border-gray-300 rounded-bl-md rounded-tl-md p-1 bg-pink-100 w-[300px] focus:outline-none' placeholder='Search...' />
                <button type='submit' className='bg-purple-500 py-2.5 text-white w-[40px] h-[33px] rounded-br-md rounded-tr-md hover:bg-purple-600 text-center pl-2 cursor-pointer'><FontAwesomeIcon icon={faMagnifyingGlass} className="text-white text-lg w-[19px]"/></button>
              </form>
            </div>
        </div>
        <div id='centernavsection' className='flex pt-5 pl-8 gap-6'>
            <div id='home'>
              <Link href='/' className='text-lg font-semibold'>Home</Link>
            </div>
            <div id='categorymenu' className="group h-auto relative z-20">
              <button className='text-lg font-semibold hover:text-yellow-700'>Categories</button>
              <div id="category-dropdown" className="flex absolute mt-2 left-0 max-h-0 group-hover:max-h-[500px] group-hover:flex overflow-hidden w-[250px] text-center flex-col rounded-tl-md rounded-bl-md rounded-br-md rounded-tr-md transition-[max-height] duration-500 ease-in-[cubic-bezier(0.25, 0.46, 0.45, 0.94)]">
                <ul id="list" className='font-bold'>
                  <li id="listitem" className='py-1'><Link href='/category/men'>Men</Link></li>
                  <li id="listitem" className='py-1'><Link href='/category/women'>Women</Link></li>
                  <li id="listitem" className='py-1'><Link href='/category/kids'>Kids</Link></li>
                  <li id="listitem" className='py-1'><Link href='/category/home'>Home</Link></li>
                  <li id="listitem" className='py-1'><Link href='/category/beauty'>Beauty</Link></li>
                </ul>
              </div>
            </div>
            <div id='newarrivals'>
              <Link href='/newarrivals' className='text-lg font-semibold '>New Arrivals</Link>
            </div>
            <div id='aboutus'>
              <Link href='/aboutus' className='text-lg font-semibold'>About Us</Link>
            </div>
        </div>
        <div id='rightnavsection' className='flex pt-5 pl-8 gap-6'>
            <div id='becomeaseller'>
              <Link href='/becomeaseller' className='text-lg font-semibold'>Become a Seller</Link>
            </div>
            <div id='account'>
              <Link href='/account' className='text-lg font-semibold'>Account</Link>
            </div>
            <div className="relative flex flex-col items-center w-[60px] h-[50px]">
          <Link href="/cart">
            <span>
              <span
                className="absolute -top-2 text-purple-950 rounded-full text-center bg-yellow-500 w-7 h-7 font-bold flex items-center justify-center -right-[2px]"
                style={{ zIndex: 10 }}
              >
                0
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                id="shopping-cart"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
              </svg>
            </span>
          </Link>
        </div>
        </div>
    </nav>
  )
}

export default Navbar