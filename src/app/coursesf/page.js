"use client"
import React, { useEffect, useState } from 'react'
import courses from '@/app/Components/arr'
import { MdPlaylistAddCheck } from "react-icons/md";
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiLoader } from "react-icons/fi";

const Page = () => {
    // const email = localStorage.getItem('email')
    const [source , setSource] = useState(null)
    const[load , setload] = useState(false)
    const[arr , setArr]=useState([])
    const [sub , setSub] = useState('web')
    const [list, setList] = useState(1)
    const handlecourse = (id , category) =>{
        setList(id)
        setSub(category)
    }
    const getdata = async()=>{
       try {
         setload(true)
         const data = await fetch('/api/getallcourses' , {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                sub
            })
         })
         const res = await data.json()
         if(res){
            // console.log(res);
            setload(false)
            setArr(res);
         }
      
       } catch (error) {
         console.log(error);
       }
    }
    const handleclick = async(id ,title , thumbnail , video)=>{
       try {
        const email = localStorage.getItem('email')
          if(email){
              const data = await fetch('/api/getenroll' ,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                  email,id,title , thumbnail , video
                })
              })
              const res= await data.json()
              if(res.message==='Already added to Playlist'){
                toast.error(res.message)
              }
              else{
                toast.success(res.message)
              }
          }
          else{
            toast.error('Not Logged In')
          }
       } catch (error) {
         console.log(error);
       }
    }
    useEffect(()=>{
       getdata()
    },[sub])
   
    return (
        <div className='coursecon w-full flex flex-col place-items-center'>
            <h2 className=' font-semibold text-xl'>Courses Provided By US</h2>
            <ul className='listofcoursetitle grid grid-cols-2 w-full px-1 sm:px-10 md:w-[42rem] md:px-0   gap-x-2 py-5 gap-y-2 md:grid-cols-4'>
                {
                    courses.map((val) => <li className=' bg-gray-300 w-full cursor-pointer h-10 text-black font-medium rounded flex justify-center items-center ' key={val.id} onClick={()=>handlecourse(val.id , val.category)} style={val.id === list ? { backgroundColor: 'rgb(234 179 8 / var(--tw-bg-opacity))' } : { backgroundColor: 'rgb(209 213 219 / var(--tw-bg-opacity))' }}>{val.course}</li>)
                }
            </ul>
          { load? <FiLoader className=' text-yellow-500 text-4xl sm:text-7xl font-bold'/> :  <ul className='listofcourses grid grid-cols-2 w-full px-1 sm:px-8 md:w-[42rem] md:px-0   gap-x-2 py-5 gap-y-2 md:grid-cols-4'>
                {
                   arr.map((val)=>  <li key={val._id} className=' w-full  text-black font-medium rounded flex flex-col pace-items-center '> 
                   <Image src={val.thumbnail} alt="" width={90} height={90} className='w-full h-full rounded' />
                   <p className=' text-center py-1'>{val.title}</p>
                   <hr />
                   <div className='options flex justify-evenly items-center py-2'>
                      <button className=' font-medium' onClick={()=>setSource(val.video)}>Watch Now</button>
                      <button>
                      <MdPlaylistAddCheck className=' text-3xl' onClick={()=>handleclick(val._id  , val.title , val.thumbnail , val.video)}/>
                      </button>
                      
                   </div>
                 </li>)
                }
              
           
            </ul> }
            <Toaster />
        { source &&   <div className='videcon bg-black w-full h-full fixed z-50 top-0 flex flex-col justify-center place-items-center '>
            <button onClick={()=>setSource(null)}>
            <AiOutlineCloseCircle className=' text-white absolute text-2xl top-2 right-2' />
            </button>
             <video controls  className=' w-full h-96'>
                <source  src={source}/>
             </video>
            </div> }
        </div>
        
    )
}

export default Page
