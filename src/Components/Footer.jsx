
import { MailCheckIcon, PhoneCallIcon, WholeWordIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  
  return (
    <>
      <div className="div flex justify-between items-center bg-orange-600 text-gray-50 w-full p-2" id='contact'>
<div className="div flex flex-col gap-3">
<h1 className='font-semibold  text-2xl text-neutral-50'>  Like to join our Community ?  </h1>
<p className='text-gray-50 text-sm'> A community with high academics achivementts and guaranteed Succes</p>

</div>
<Link href="/admission" >

<button className='rounded-md mt-5 py-2 px-3 border-none bg-white  text-orange-600 text-lg 
                          transform transition-all 
                hover:scale-105 hover:shadow-2xl font-medium '>Join Now </button>
</Link>
        
      </div>


    {/* // <div className='bg-neutral-800 grid lg:grid-col-4 md:grid-2 grid-col-1 gap-5 text-gray-100'> */}
    <div className="grid grid-cols-1 bg-white text-gray-900 p-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">

      <div className="div1">
  
        <h1 className='text-lg font-semibold '>Eljousy</h1>


          <div className="div flex flex-col text-gray-900 mt-3 gap-3">
            <p>Addres here</p>
            <div className="div flex gap-1">
               <PhoneCallIcon/>
              <p>08099234567</p>
            </div>
            <div className="div flex gap-1">
               <MailCheckIcon/>
              <p>info@eljousy.sch.ng</p>
            </div>
            <div className="div flex gap-1">
               <WholeWordIcon/>
              <p>www.eljousyschool.com</p>
            </div>
          </div>
        
      </div>

      <div className="div2">
        <h1 className='font-semibold text-lg '>Useful Links</h1>
        <div className="div flex flex-col gap-3 mt-3 text-gray-900">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="Sitemap">Sitemap</a>
        <a href="#faq">faq</a>
        <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="div3"> 
      <h1 className='font-semibold text-lg '>More</h1>
      <div className="d flex flex-col  text-gray-900  mt-3 gap-3 ">

      
<p>Head of School's Speach </p>
<a href="gallery">Gallery</a>
<a href="staff">Staff</a>
<a href="educator">Educator</a>
</div>
      </div>

      <div className="div4">
      <h1 className='font-semibold text-lg'>Opening Hours</h1>

      


             <div className="div flex mt-2  flex-col lg:flex-row gap-5 lg:gap-10 text-gray-900">
        <div className="div-1">
          <p>Mon-Tues:</p>
        <p> Wednes-Thurs:</p>
          <p>Fri:</p>
          <p>Sat:</p>
          <p>sun:</p>
        </div>
            <div className="div-2">
              <p>7:00 am- 4:00 pm</p>
              <p>7:00 am- 4:00 pm</p>
              <p>7:00 am- 3:00 pm</p>
              <p>Closed</p>
              <p>Closed</p>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer
