import { BookHeart, BoxIcon, ProjectorIcon, Vault } from 'lucide-react'
import React from 'react'

const Section = () => {
  return (
    <div className='bg-white p-10'>   
        <div className="sec p-10 bg-[#f1f2f9] rounded-sm">  
        <p className='uppercase text-orange-600 text-sm'>services</p>

<div className="div flex flex-col  lg:flex-row lg:justify-between mt-4 gap-5 ">

    <h1 className='text-neutral-900 font-semibold text-2xl md:4xl  '>
        <span className='block'>We Offer the best education curriculum</span>
        <span className='block'> in Nigeria</span>
    </h1>

    <p className='text-sm text-gray-500'>
        <span className='block'>Register your ward today to join our ever happy and </span>
        <span className='block'>growing learning community from across the Nation </span>
        <span className='block'>and beyound.</span>
    </p>
</div>   


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

 <div className="div-1">
 <div className="icon-div flex items-center justify-center p-3 h-12 w-12 bg-orange-600 backdrop-blur-sm rounded-lg shadow-md">
                <BoxIcon className='text-white'/>
              </div>

  <h1 className=' mt-3 text-neutral-900 font-semibold text-xl'>Adequate facilities </h1>
  <p className='text-gray-500'> We have adequate facilities for Creche,KG,Nusery,Basic and Secondary School</p>
</div>
<div className="div-1">

<div className="icon-div flex items-center justify-center p-3 h-12 w-12 bg-orange-600 backdrop-blur-sm rounded-lg shadow-md">
                <BookHeart className='text-white'/>
              </div>
  <h1 className='text-neutral-900 font-semibold text-xl mt-3'>Academics  Excellence</h1>
  <p className='text-gray-500'>We don't just offer the best academic studies, we empower our students for the future</p>
</div>
<div className="div-1">

<div className="icon-div flex items-center justify-center p-3 h-12 w-12 bg-orange-600 backdrop-blur-sm rounded-lg shadow-md">
                <Vault className='text-white'/>
              </div>

  <h1 className='text-neutral-900 font-semibold text-xl mt-3'>Moral Standards</h1>
  <p className='text-gray-500'>We have incorporated into our curriculum morals and ethical standards to make our students standout</p>
</div>
<div className="div-1">
<div className="icon-div flex items-center justify-center p-3 h-12 w-12 bg-orange-600 backdrop-blur-sm rounded-lg shadow-md">
                <ProjectorIcon className='text-white'/>
              </div>


  <h1 className='text-neutral-900 font-semibold text-xl mt-3'>Experienced Experts</h1>
  <p className='text-gray-500'>We have hired the best teachers and caregivers to handle all activities at Eljousy</p>
</div>



  </div>






        </div>
    </div>
  )
}

export default Section
