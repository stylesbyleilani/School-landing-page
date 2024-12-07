
import Image from 'next/image'
import React from 'react'

const Staff = () => {
  return (
    <div className='bg-orange-800 text-gray-200 p-2' id="staff" >
        <h1 className='font-semibold text-2xl text-center mt-7 text-neutral-200'>Meet Our Experts  </h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10 gap-6 mt-10">
        <div className=" a rounded-lg group">
      <Image 
        src={"/t4.jpg"}
        width={200}
        height={300}
        alt='Feature image showing curriculum'
        className="object-cover w-[500px] h-[350px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
      />
      <div className="div rounded-md p-2">
      <h1 className='font-semibold  text-lg text-neutral-200'>Grace Mark  </h1>
      <p>Science Educator</p>
      </div>
    </div>

    <div className=" a rounded-lg group">
      <Image 
        src={"/t1.jpg"}
        width={200}
        height={300}
        alt='Feature image showing curriculum'
        className="object-cover w-[500px] h-[350px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
      />
            <div className="div rounded-md p-2">
      <h1 className='font-semibold  text-lg text-neutral-200'> Binta Adeyemo  </h1>
      <p>IT Educator</p>
      </div>
    </div>

    <div className=" a rounded-lg group">
      <Image 
        src={"/t2.jpg"}
        width={200}
        height={300}
        alt='Feature image showing curriculum'
        className="object-cover w-[500px] h-[350px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
      />
            <div className="div rounded-md p-2">
      <h1 className='font-semibold  text-lg text-neutral-200'> Elena Gilbert  </h1>
      <p>Biolody Educator</p>
      </div>
    </div>

    <div className=" a rounded-lg group">
      <Image 
        src={"/t3.jpg"}
        width={200}
        height={300}
        alt='Feature image showing curriculum'
        className="object-cover w-[500px] h-[350px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
      />

<div className="div rounded-md p-2">
      <h1 className='font-semibold  text-lg text-neutral-200'> Ore Lawal  </h1>
      <p>Art Educator</p>
      </div>
    </div>




    <div className=" a rounded-lg group">
      <Image 
        src={"/t4.jpg"}
        width={200}
        height={300}
        alt='Feature image showing curriculum'
        className="object-cover w-[500px] h-[350px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
      />
      <div className="div rounded-md p-2">
      <h1 className='font-semibold  text-lg text-neutral-200'>Grace Mark  </h1>
      <p>Science Educator</p>
      </div>
    </div>

    <div className=" a rounded-lg group">
      <Image 
        src={"/t1.jpg"}
        width={200}
        height={300}
        alt='Feature image showing curriculum'
        className="object-cover w-[500px] h-[350px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
      />
            <div className="div rounded-md p-2">
      <h1 className='font-semibold  text-lg text-neutral-200'> Binta Adeyemo  </h1>
      <p>IT Educator</p>
      </div>
    </div>

    <div className=" a rounded-lg group">
      <Image 
        src={"/t2.jpg"}
        width={200}
        height={300}
        alt='Feature image showing curriculum'
        className="object-cover w-[500px] h-[350px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
      />
            <div className="div rounded-md p-2">
      <h1 className='font-semibold  text-lg text-neutral-200'> Elena Gilbert  </h1>
      <p>Biolody Educator</p>
      </div>
    </div>

    <div className=" a rounded-lg group">
      <Image 
        src={"/t3.jpg"}
        width={200}
        height={300}
        alt='Feature image showing curriculum'
        className="object-cover w-[500px] h-[350px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
      />

<div className="div rounded-md p-2">
      <h1 className='font-semibold  text-lg text-neutral-200'> Ore Lawal  </h1>
      <p>Art Educator</p>
      </div>
    </div>




 </div>



      
    </div>
  )
}

export default Staff