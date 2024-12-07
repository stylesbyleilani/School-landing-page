import { Book, BookAIcon, NotebookIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
// import m1 from "../../public/m2.jpg"
const Services = () => {
  return (
    <div className='relative mt-10 mx-auto px-4 md:px-8 lg:px-12 bg-white'    id="about"   >
      <div className="text-center">
        <h2 className='text-3xl sm:text-5xl  font-semibold lg:text-4xl text-blue-950 mt-10 lg:mt-20 tracking-wide'>
          <span className='block'>We Offer the best education curriculum in  </span>
          <span>Nigeria</span>
        </h2>
        <p className='mt-3 max-w-3xl mx-auto text-gray-500'>

            <span className='block'>Register your ward today to join our ever happy and growing learning</span>
            <span>community from across the Nation andd beyound</span>
            </p>
      </div>


       




<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  <div className="flex flex-col justify-center gap-4 p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md border border-gray-100">
    <div className="relative overflow-hidden rounded-lg group">
      <Image 
        src={"/m6.jpg"}
        width={300}
        height={200}
        alt='Feature image showing curriculum'
        className="object-cover w-full h-48 transform transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h1 className='text-2xl font-semibold text-blue-950 hover:text-green-600 transition-colors duration-300'>
      Scientific Experiment
    </h1>
    <p className="text-gray-600 leading-relaxed">
      This way we aim to grow a cluster of 15-17 AI first companies over this AI decade.
    </p>
  </div>

  <div className="flex flex-col justify-center gap-4 p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md border border-gray-100">
    <div className="relative overflow-hidden rounded-lg group">
      <Image 
        src={"/m2.jpg"}
        width={300}
        height={200}
        alt='Feature image showing curriculum'
        className="object-cover w-full h-48 transform transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h1 className='text-2xl font-semibold text-blue-950 hover:text-green-600 transition-colors duration-300'>
      Coding and Robotics
    </h1>
    <p className="text-gray-600 leading-relaxed">
      This way we aim to grow a cluster of 15-17 AI first companies over this AI decade.
    </p>
  </div>

  <div className="flex flex-col justify-center gap-4 p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md border border-gray-100">
    <div className="relative overflow-hidden rounded-lg group">
      <Image 
        src={"/m7.jpg"}
        width={300}
        height={200}
        alt='Feature image showing curriculum'
        className="object-cover w-full h-48 transform transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h1 className='text-2xl font-semibold text-blue-950 hover:text-green-600 transition-colors duration-300'>
      Agriculture and Extension
    </h1>
    <p className="text-gray-600 leading-relaxed">
      This way we aim to grow a cluster of 15-17 AI first companies over this AI decade.
    </p>
  </div>
</div>











        
    </div>
  )
}

export default Services
