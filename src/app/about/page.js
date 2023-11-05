"use client"
import React, { useEffect, useState } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { FiLoader } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from 'next/image';

const Page = () => {
  // const[enrollc , setEnrollc]=useState(false)
  const [source, setSource] = useState(null)
  const [enroll, setEnroll] = useState([])
  const router = useRouter()
  const [person, setPerson] = useState(null)
  const [load, setLoad] = useState(false)
  const getuserdata = async (email) => {
    try {
      setLoad(true)
      // console.log(email);
      const data = await fetch('/api/getuserdetail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        })
      })
      const res = await data.json()
      if (res) {
        setLoad(false)
        setPerson(res);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
      const email = localStorage.getItem('email')
      if(email){
        getuserdata(email)
      }
  
    else {
      router.push('/login')
    }
  }, [router])
  const getenrollcourses = async () => {
    try {
       const email = localStorage.getItem('email')
      // setEnrollc(true)
      const data = await fetch('/api/getaddedcourses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email
        })
      })
      const res = await data.json()
      if (res) {
        // setEnrollc(false)
        // console.log(res);
        setEnroll(res);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
      getenrollcourses()
  }, [])
  const logout = () => {
    localStorage.removeItem('email')
    router.push('/login')
  }
  const deletecourse = async(overid)=>{
     document.getElementById(overid).style.display='none'
     try {
      const data = await fetch('/api/deletecourse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          overid
        })
      })
      const res = await data.json()
      if (res) {
        // console.log(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  }  
  if (load) {
    return <div className='loader w-full h-full fixed top-0 z-40 bg-white flex justify-center items-center'>
      <FiLoader className=' text-4xl sm:text-8xl font-bold text-yellow-500' />

    </div>
  }
  else {
    return (
      <>
        {person && <div className='profilepage w-full overflow-hidden sm:pl-20 md:pl-36' >
          <h1 className=' font-semibold text-xl mb-2 pl-2'>PROFILE</h1>
          <div className="profileimage py-3 flex mb-2  items-center">
            <Image src={person.profileimg} alt="" width={70} height={70} className=' rounded-[50%] mx-2 border-[1px] border-gray-700 shadow-xl' />
            <div className="description ">
              <div className="name">{person.name}</div>
              <div className="email">{person.email}</div>
            </div>
          </div>
          <div className="subscription flex mb-4 items-center">
            <h2 className='px-2'>Subscription</h2>
            <button className=' px-2 bg-yellow-500 h-9 rounded text-black font-medium'>Subscribe</button>
          </div>
          <div className="updateeditprofile mb-4">
            <button className='mx-1 px-1 py-1 text-sm font-medium bg-gray-300 border-black border-[1px] rounded'>Update Profile</button>
            <button className='mx-1 px-1 py-1 text-sm font-medium bg-gray-300 border-black border-[1px] rounded'>Change Password</button>
            <button className='mx-1 px-1 py-1 text-sm font-medium bg-gray-300 border-black border-[1px] rounded' onClick={logout}>Logout</button>
          </div>
          <div className="playlist px-2  w-full ">
            <h2 className='font-semibold text-xl mb-2'>PLAYLIST</h2>
            <div className="listofplaylist grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-4 sm:w-[30rem] sm:gap-x-9">
              { enroll.map((val) => <div key={val._id} id={val.cid} className="item   flex flex-col ">
                <Image src={val.thumbnail} alt="" width={90} height={90} className=' w-full h-full' />
                <div className="playlistsetting flex items-center  justify-evenly">
                  <button onClick={() => setSource(val.video)}>
                    <p className=' text-lg font-medium'>Watch Now</p>
                  </button>
                  <MdDeleteOutline className=' text-xl cursor-pointer' onClick={()=>deletecourse(val.cid)}/>
                </div>
              </div>)}


            </div>
          </div>
      
        </div >}
        {source && <div className='videcon bg-black w-full h-full fixed z-50 top-0 flex flex-col justify-center place-items-center '>
          <button onClick={() => setSource(null)} >
          <AiOutlineCloseCircle className=' text-white absolute text-2xl top-2 right-2' />
          </button>
            <video controls className=' w-full h-96'>
              <source src={source} />
            </video>
          </div>}
      </>

    )
  }

}

export default Page

