






import Image from 'next/image'
import React from 'react'

const EducatorCard = ({ 
  src, 
  name, 
  role, 
  alt = 'Educator profile image' 
}) => {
  return (
    <div className="rounded-lg group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative w-full aspect-square overflow-hidden">
        <Image 
          src={src}
          fill
          alt={alt}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transform transition-transform duration-300 group-hover:scale-105"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(350, 350))}`}
        />
      </div>
      <div className="p-4 text-center bg-white">
        <h2 className='font-semibold text-lg text-neutral-900'>{name}</h2>
        <p className="text-neutral-600">{role}</p>
      </div>
    </div>
  )
}

const Educators = () => {
  const educators = [
    {
      src: "/t4.jpg",
      name: "Grace Mark",
      role: "Science Educator"
    },
    {
      src: "/t1.jpg",
      name: "Binta Adeyemo",
      role: "IT Educator"
    },
    {
      src: "/t2.jpg",
      name: "Elena Gilbert",
      role: "Biology Educator"
    },
    {
      src: "/t3.jpg",
      name: "Ore Lawal",
      role: "Art Educator"
    }
  ]

  return (
    <div className='bg-white py-16 px-4 sm:px-6 lg:px-8'>
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className='font-semibold text-3xl text-neutral-900 mb-4'>Our Educators</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Meet our dedicated team of passionate educators who are committed to delivering exceptional learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {educators.map((educator, index) => (
            <EducatorCard 
              key={index}
              src={educator.src}
              name={educator.name}
              role={educator.role}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Utility functions for blur placeholder
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f0f0f0" offset="20%" />
      <stop stop-color="#e0e0e0" offset="50%" />
      <stop stop-color="#f0f0f0" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f0f0f0" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) => 
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default Educators