"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { BiMenuAltRight } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  // const [drop, setDrop] = useState('-100%')
  return (
    <header className='sticky top-0 z-20'>
      <nav className=' w-full h-14 flex justify-between items-center px-3'>
        <div className="leftnav  rounded-3xl h-7 w-7 flex justify-center items-center bg-yellow-500">
          <button onClick={() => document.getElementById('drop').style.left='0'} >
          <BiMenuAltRight className=' text-2xl' />
          </button>
        </div>
        <Link href='/about'>
          <div className="rightnav">
            <CgProfile className=' text-3xl' />
          </div>
        </Link>

      </nav>
      <div id='drop' className='leftdropdown w-52 h-full fixed bg-white top-0 left-0 z-40 flex flex-col' style={{ left: '-100%', transition: '1s' }}>
        <div className="topdrop w-full h-[90%] ">
          <div className='heading w-full h-12 flex items-center justify-between px-2 border-[1px] mb-2 border-gray-200 border-x-0  border-t-0'>
            <h2 className=' font-semibold text-base'>COURSE BUNDLER</h2>
            <button onClick={() => document.getElementById('drop').style.left='-100%'}>
            <AiOutlineCloseCircle className=' text-xl ' />
            </button>
          </div>
          <ul className=' pl-3 font-semibold cursor-pointer'>
            <Link href="/">
              <li className=' mb-3'>Home</li>
            </Link>
            <Link href='/coursesf'>
            <li className=' mb-3'>Browse All Course</li>
            </Link>
           
            <li className=' mb-3'>Request a course</li>
            <li className=' mb-3'>Contact Us</li>
            <li className=' mb-3'>About</li>
          </ul>
        </div>
        <div className="drowndrop w-full h-[10%] flex justify-evenly items-center ">
          <Link href={{ pathname: '/login', query: { data: 'loginuser' } }}>
            <button className=' bg-yellow-500 text-black w-16 h-9 rounded font-medium'>Login</button>
          </Link>
          <p>or</p>
          <Link href={{ pathname: '/login', query: { data: 'signuser' } }}>
            <button className=' bg-yellow-500 text-black w-16 h-9 rounded font-medium'>SignUp</button>
          </Link>

        </div>
      </div>
    </header>

  )
}

export default Navbar
