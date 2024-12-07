
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <div 
      className=" relative  flex flex-col lg:flex-row justify-between min-h-screen px-7  lg:px-16 mt-12 md:mt-20 lg:mt-0 bg-white"
      id="hero"
    >

      <div className="w-full mt-7 lg:w-1/2 lg:mt-36 space-y-6 text-start lg:text-start">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600">
          <span className="block">Getting Best Quality</span>
          <span className="block mt-2">Education Is Now Easier</span>  
          <span className="block mt-2">With Eljousy</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-gray-600 mb-10">
          Learning to do their best work with others, in harmony and safety, 
          while achieving excellence through collaborative growth.
        </p>

        <Link href="/admission" className="inline-block">
          <button 
            className="rounded-md py-2 px-5 bg-orange-600 text-white text-lg 
            font-medium transition-all hover:scale-105 hover:shadow-2xl"
          >
            Apply Now
          </button>
        </Link>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-10">
        <Image 
          src="/edu.gif"
          width={600}
          height={500}
          alt="Feature image showing curriculum"
          className="object-cover rounded-md transition-transform duration-300 hover:scale-105"
          priority
        />
      </div>
    </div>
  );
}