





import Image from 'next/image'
import React from 'react'

const GalleryImage = ({ src, alt }) => {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <Image 
        src={src}
        width={300}
        height={200}
        alt={alt}
        className="object-cover w-full h-48 transform transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(300, 200))}`}
      />
    </div>
  )
}

const Gallery = () => {
  const galleryImages = [
    { src: "/m2.jpg", alt: "Curriculum showcase image 1" },
    { src: "/m1.jpg", alt: "Curriculum showcase image 2" },
    { src: "/m4.jpg", alt: "Curriculum showcase image 3" },
    { src: "/m12.jpg", alt: "Curriculum showcase image 4" }
  ]

  return (
    <div className='relative mt-10 mx-auto px-4 md:px-8 p-10 bg-white' id='services'>
      <div className="text-center mb-8">
        <h2 className='text-3xl sm:text-5xl font-semibold lg:text-4xl text-gray-900 tracking-wide'>
          Our Gallery
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <GalleryImage 
            key={index} 
            src={image.src} 
            alt={image.alt} 
          />
        ))}
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

export default Gallery