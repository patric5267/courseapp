"use client"
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AiOutlineEye } from "react-icons/ai";
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import profile from '@/app/images/profile.png'

const Page = () => {
  const router = useRouter()
  const[prev , setPrev]=useState('password')
  const[load ,setload]=useState(false)
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const [profilepic , setProfilepic]=useState(profile)
    const searchparams = useSearchParams()
    const data = searchparams.get('data')
    console.log(data);
    const handleimg = (e) => {
      const file = e.target.files[0]
      console.log(file);
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        if (reader.readyState === 2) {
          // console.log(reader.result);
          setProfilepic(reader.result)
        }
      }
    }
    const postdata = async(e)=>{
      try {
         e.preventDefault()
         if(!data || data==='loginuser'){
          setload(true)
          const data = await fetch('/api/loginserver' , {
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              email,password
            })
           })
           const res = await data.json()
           if(res.message==='Profile Created'){
               localStorage.setItem('email' , res.email)
               router.push('/about')
           }
           else{
            toast.error(res.message)
           }
         }
         else{
          setload(true)
          const data = await fetch('/api/sigup' , {
            method:'POST',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              name,email,password,profilepic
            })
           })
           const res = await data.json()
           if(res.message==='Profile Created'){
               localStorage.setItem('email' , res.email)
               router.push('/about')
           }
           else{
            toast.error(res.message)
           }
         }
        
      
       } catch (error) {
         console.log(error);
       }
    }
  return (
    <div className='lognisigncon w-full flex flex-col place-items-center overflow-hidden'>
      {data==='signuser' ? <h1 className=' text-lg font-semibold mb-2'>REGISTRATION</h1> : <h1 className=' text-lg font-semibold mb-2'>Welcome To CourseBundler</h1> }
    { data==='signuser'&&<Image src={profilepic} width={70}
      height={70} alt="error" className=' rounded-[50%] '/> }
      <div className=' forcon flex justify-center  w-full'>
      <form className='relative w-72 sm:w-96' onSubmit={postdata}>
        {data==='signuser'&& <><label htmlFor="Name" className=' font-semibold '>Name</label><br/>
          <input type="text" required onChange={(e)=>setName(e.target.value)} className='border-[1px] pl-2 border-gray-600 outline-yellow-600 h-10  rounded w-full mb-2'/><br/> </> }
          <label htmlFor="email" className=' font-semibold'>Email</label><br/>
          <input type="email" required onChange={(e)=>setEmail(e.target.value)} className='border-[1px] pl-2 border-gray-600  outline-yellow-600 h-10 rounded w-full mb-2'/><br/>
          <label htmlFor="password" className=' font-semibold '>Password</label><br/>
          <input type={prev} onChange={(e)=>setPassword(e.target.value)} required className='border-[1px] pl-2 border-gray-600  outline-yellow-600 h-10 rounded w-full mb-2'/>
          <AiOutlineEye className=' absolute right-2' style={data==='signuser'? {bottom:"8rem" }: {bottom:'3.5rem'}} onClick={prev==='password' ? ()=>setPrev('text') : ()=>setPrev('password')}/><br/>
        {data==='signuser' && <> <label htmlFor="password" className=' font-semibold '>Choose Image</label><br/>
          <div className='bg-gray-300 w-full h-10 rounded font-medium mt-2  '>
          <input required name='profilepic' type="file" className=' opacity-0'  onChange={handleimg}/>
            <p className='flex justify-center place-items-center absolute bottom-11 left-28 sm:left-[9.5rem]'>Choose File</p>
          </div> </>}
          <input type="submit" defaultValue={load? 'Wait..' : data==='signuser'? 'Sign Up' :'Login'}  className=' bg-yellow-500 w-20 h-7 cursor-pointer rounded mt-2 font-medium'/>
       </form>
      </div>
       <div className='  w-72 sm:w-96 my-2'>
       {data==='signuser'? <p className=' font-medium text-base'>Already a User ? <Link className=' text-yellow-600' href={{pathname:'/login' , query:{data:'loginuser'}}}>Login here</Link></p> : <p className=' font-medium text-base'>New user ? <Link className=' text-yellow-600' href={{pathname:'/login' , query:{data:'signuser'}}}>Sign Up</Link></p>}
       </div>
     <Toaster/>
    </div>
  )
}

export default Page
