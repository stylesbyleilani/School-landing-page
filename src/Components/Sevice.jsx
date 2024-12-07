import Image from 'next/image'
import React  from 'react'   

const Sevice = () => {
  return (
    

    <div className='bg-white p-10'>
        <h1 className='font-semibold text-3xl text-neutral-900'>Our Core Areas of Excellence</h1>
        <div className="wrapper flex justify-between gap-10 flex-col md:flex-row   mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">



       <div className="div-1">
    
      <Image 
        src={"/m6.jpg"}
        width={200}
        height={300}
        alt='Feature image showing curriculum'
        className="object-cover w-[500px] h-[350px] rounded-sm transform transition-transform duration-300 group-hover:scale-105"
      />

<div className="b mt-3 ">
  <h1 className='font-semibold text-2xl text-neutral-900'>Scientific Experiment  </h1>
  <p className='text-gray text-sm'> This way we aim to grow a cluster of 15-17 AI first companies over this AI decade.</p>
     </div>
    </div>

    

    <div className="div-1">
    
    <Image 
      src={"/m2.jpg"}
      width={200}
      height={300}
      alt='Feature image showing curriculum'
      className="object-cover w-[500px] h-[350px] rounded-sm transform transition-transform duration-300 group-hover:scale-105"
    />

<div>
   <h1 className='font-semibold text-2xl text-neutral-900'> Coding and Robotics  </h1>
   <p className='text-gray-500 text-sm'> This way we aim to grow a cluster of 15-17 AI first </p>
   </div>
</div>





  <div className="div-1">
    
    <Image 
      src={"/m7.jpg"}
      width={200}
      height={300}
      alt='Feature image showing curriculum'
      className="object-cover w-[500px] h-[350px] rounded-sm transform transition-transform duration-300 group-hover:scale-105"
    />

<div>
<h1 className='font-semibold text-2xl text-neutral-900'>Agriculture and Extension   </h1>
<p className='text-gray-500 text-sm'> This way we aim to grow a cluster of 15-17 AI first </p>
   </div>
</div>








</div>
      {/* <div className="div-1">
    
      <div className=" a rounded-lg group">
      <Image 
        src={"/m6.jpg"}
        width={200}
        height={300}
        alt='Feature image showing curriculum'
        className="object-cover w-[500px] h-[350px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
      />
    </div>

     <div className="b mt-3 ">
  <h1 className='font-semibold text-2xl text-neutral-900'>Scientific Experiment  </h1>
  <p className='text-gray text-sm'> This way we aim to grow a cluster of 15-17 AI first companies over this AI decade.</p>
     </div>

      </div>

      <div className="div-2 flex  md:mt-0 mt-5 gap-5 ">
<div className="div-a flex gap-5 flex-col">

<div className="img-1 flex gap-4">
<Image 
        src={"/m2.jpg"}
        width={100}
        height={100}
        alt='Feature image showing curriculum'
        className="object-cover w-[100px] h-[100px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
      />

<div>
   <h1 className='font-semibold text-2xl text-neutral-900'> Coding and Robotics  </h1>
   <p className='text-gray-500 text-sm'> This way we aim to grow a cluster of 15-17 AI first </p>
   </div>
</div>


<div className="img-1 flex gap-4">
<Image 
        src={"/m7.jpg"}
        width={100}
        height={100}
        alt='Feature image showing curriculum'
        className="object-cover w-[100px] h-[100px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
      />

<div>
<h1 className='font-semibold text-2xl text-neutral-900'>Agriculture and Extension   </h1>
<p className='text-gray-500 text-sm'> This way we aim to grow a cluster of 15-17 AI first </p>
   </div>
</div>

<div className="img-1 flex gap-4">
<Image 
        src={"/m6.jpg"}
        width={100}
        height={100}
        alt='Feature image showing curriculum'
        className="object-cover w-[100px] h-[100px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
      />

<div>

<h1 className='font-semibold text-2xl text-neutral-900'>Scientific Experiment  </h1>
<p className='text-gray-500 text-sm'> This way we aim to grow a cluster of 15-17 AI first </p>
   </div>
</div>



</div>
      </div> */}
      </div>
    </div>
    
  )
}

export default Sevice
