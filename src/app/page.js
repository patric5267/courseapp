// default Home page
import Image from 'next/image'
import styles from '@/app/styles/home.module.css'
import webdev from '@/app/images/webdev.png'
import appdev from '@/app/images/appdev.png'
import dsa from '@/app/images/dsa.png'
import ai from '@/app/images/ai.png'
import expert from '@/app/images/expert.png'

export default function Home() {
  return (
    <>
      <div className=' relative w-full'>
        <h1 className=' absolute top-3 font-semibold text-2xl text-center  w-full sm:text-3xl  sm:px-14  md:px-24 md:text-4xl lg:text-5xl'>India's Most Reputated Online Platform</h1>
        <div className=' w-full h-[100vh] bg-[#B6E7EC] flex justify-center items-center flex-col sm:flex-row sm:justify-evenly'>
          <Image src={expert} alt='' />
          <div className=' flex flex-col justify-center place-items-center sm:place-items-end'>
            <h2 className=' font-bold text-xl tracking-wide md:text-2xl xl:text-4xl'>
              LEARN FROM THE EXPERTS
            </h2>
            <p className=' text-xs tracking-wide mt-1 md:text-sm xl:text-xl'>Find Valuable Content At Rasonable Price</p>
            <button className=' w-28 h-9 text-black bg-yellow-500 rounded font-semibold mt-2'>Explore Now</button>
          </div>

        </div>

        <div className={styles['custom-shape-divider-bottom-1698395697']}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles['shape-fill']}></path>
          </svg>
        </div>

      </div>
      <div className=' webdevelopment relative  w-full h-80 sm:h-96 lg:h-[30rem] bg-[#E6B1EB] flex justify-center items-center flex-col pb-12 sm:flex-row sm:justify-evenly'>
        <Image src={webdev} alt="Large Image" className=' w-64 h-40 sm:w-80 sm:h-60 lg:w-96 xl:w-[27rem] xl:h-80' />
        <div className=' flex flex-col place-items-center sm:place-items-end  sm:pr-3  md:pr-5 '>
          <h2 className='  font-semibold g tracking-wide  px-3 text-center my-2 sm:text-right sm:px-0 sm:text-lg md:text-2xl lg:text-4xl'>Well Structured Web Developemnt Course with notes</h2>
          <button className=' font-semibold bg-yellow-500 rounded w-28 h-8 text-black'>Click To View</button>
        </div>

        <div className={styles['custom-shape-divider-bottom-1698401272']}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles['shape-fill2']}></path>
          </svg>
        </div>
      </div>
      <div className=' appdevelopment relative w-full h-80 sm:h-96 lg:h-[30rem] bg-[#CAF39A] flex justify-center items-center flex-col pt-2 sm:flex-row sm:justify-evenly'>
        <Image src={appdev} alt="Large Image" className=' w-64 h-40 sm:w-80 sm:h-60 md:order-last lg:w-96 xl:w-[27rem] xl:h-80' />
        <div className=' flex flex-col place-items-center sm:place-items-end  sm:pr-3  md:pr-0 md:place-items-start  md:pl-5'>
          <h2 className='  font-semibold  tracking-wide  px-3 text-center my-2 sm:text-right md:text-left  sm:px-0 sm:text-lg md:text-2xl lg:text-4xl'>Muliple Projects with source code using React Native</h2>
          <button className=' font-semibold bg-yellow-500 rounded w-28 h-8 text-black mb-10'>Click To View</button>
        </div>
        <div className={styles['custom-shape-divider-bottom-1698403096']}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles['shape-fill3']}></path>
          </svg>
        </div>
      </div>
      <div className='dsa relative w-full h-80 bg-[#FDCAAA] sm:h-96 lg:h-[30rem] flex justify-center items-center flex-col pt-2 sm:flex-row sm:justify-evenly'>
      <Image src={dsa} alt="Large Image" className=' w-64 h-40 sm:w-80 sm:h-60 lg:w-96 xl:w-[27rem] xl:h-80' />
        <div className=' flex flex-col place-items-center sm:place-items-end  sm:pr-3  md:pr-5 '>
          <h2 className='  font-semibold g tracking-wide  px-3 text-center my-2 sm:text-right sm:px-0 sm:text-lg md:text-2xl lg:text-4xl'>DSA using C++ with more then 1000 of questions</h2>
        <button className=' font-semibold bg-yellow-500 rounded w-28 h-8 text-black mb-10'>Click To View</button>
      </div>
        <div className={styles['custom-shape-divider-bottom-1698404302']}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles['shape-fill4']}></path>
          </svg>
        </div>
      </div>
      <div className='ai  w-full h-80 bg-[#E0DED6] sm:h-96 lg:h-[30rem] flex justify-center items-center flex-col sm:flex-row sm:justify-evenly '>
        <Image src={ai} alt="Large Image" className=' w-64 h-48 sm:w-80 sm:h-60 md:order-last lg:w-96 xl:w-[27rem] xl:h-80' />
        <div className=' flex flex-col place-items-center sm:place-items-end  sm:pr-3  md:pr-0 md:place-items-start  md:pl-5 '>
        <h2 className='  font-semibold  tracking-wide  px-3 text-center my-2 sm:text-right md:text-left  sm:px-0 sm:text-lg md:text-2xl lg:text-4xl'>Deep dive into Machine Learning and Python Libraries</h2>
        <button className=' font-semibold bg-yellow-500 rounded w-28 h-8 text-black mb-10'>Click To View</button>
        </div>
      </div>
      
    </>
  )
}
