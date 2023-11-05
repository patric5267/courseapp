//like app.js
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import connecttodatbase from '@/utilis/dbcon'

connecttodatbase()
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Course App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        {children}
        {/* <Footer/> */}
        </body>
    </html>
  )
}