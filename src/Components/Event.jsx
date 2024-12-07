
// import React from 'react'
// import Eventimg from './EventImg'
// import Image from 'next/image'

// const Event = () => { 
//   return (
//     <div>
//       <Eventimg/>
//       <div className="div p-10">
//       <h1 className='text-sm uppercase text-blue-700'>Events</h1>
//       <div className="div flex lg:justify-between">

//         <div className="div1">
//       <h1 className='font-semibold text-xl text-neutral-900'>
//         <span className='block'>Join our next</span>
//         <span>upcoming event</span>
//       </h1>
//       </div>




//       {/* <div className="b mt-3 ">
//   <h1 className='font-semibold text-2xl text-neutral-900'>Scientific Experiment  </h1>
//   <p className='text-gray text-sm'> This way we aim to grow a cluster of 15-17 AI first companies over this AI decade.</p>
//      </div> */}

//       {/* </div>

//       <div className="div-2 flex  md:mt-0 mt-5 gap-5 ">
// <div className="div-a flex gap-5 flex-col"> */}

// <div className="img-1 flex gap-4">
// <Image 
//         src={"/m2.jpg"}
//         width={100}
//         height={100}
//         alt='Feature image showing curriculum'
//         className="object-cover w-[100px] h-[100px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
//       />

// <div>
//    <h1 className='font-semibold text-2xl text-neutral-900'> Coding and Robotics  </h1>
//    <p className='text-gray-500 text-sm'> This way we aim to grow a cluster of 15-17 AI first </p>
//    </div>
// </div>


// <div className="img-1 flex gap-4">
// <Image 
//         src={"/m7.jpg"}
//         width={100}
//         height={100}
//         alt='Feature image showing curriculum'
//         className="object-cover w-[100px] h-[100px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
//       />

// <div>
// <h1 className='font-semibold text-2xl text-neutral-900'>Agriculture and Extension   </h1>
// <p className='text-gray-500 text-sm'> This way we aim to grow a cluster of 15-17 AI first </p>
//    </div>
// </div>

// <div className="img-1 flex gap-4">
// <Image 
//         src={"/m6.jpg"}
//         width={100}
//         height={100}
//         alt='Feature image showing curriculum'
//         className="object-cover w-[100px] h-[100px] rounded-md transform transition-transform duration-300 group-hover:scale-105"
//       />

// <div>

// <h1 className='font-semibold text-2xl text-neutral-900'>Scientific Experiment  </h1>
// <p className='text-gray-500 text-sm'> This way we aim to grow a cluster of 15-17 AI first </p>
//    </div>
// </div>



// </div>

//       </div>
//       </div>
//     // </div>
//   )
// }

// export default Event





import React from 'react';
import Image from 'next/image';
import Eventimg from './EventImg';
import Link from 'next/link';

// Create a reusable EventItem component
const EventItem = ({ imageSrc, title, description }) => (
  <div className="img-1 flex gap-4 items-center mb-4">
    <Image
      src={imageSrc}
      width={100}
      height={100}
      alt={`Event image for ${title}`}
      className="object-cover w-24 h-24 rounded-md transition-transform duration-300 hover:scale-105"
    />
    <div>
      <h2 className='font-semibold text-xl text-neutral-900'>{title}</h2>
      <p className='text-gray-500 text-sm'>{description}</p>
    </div>
  </div>
);

const Event = () => {
  const eventItems = [
    {
      imageSrc: "/m2.jpg",
      title: "Coding and Robotics",
      description: "This way we aim to grow a cluster of 15-17 AI first companies"
    },
    {
      imageSrc: "/m7.jpg",
      title: "Agriculture and Extension",
      description: "This way we aim to grow a cluster of 15-17 AI first companies"
    },
    {
      imageSrc: "/m6.jpg",
      title: "Scientific Experiment",
      description: "This way we aim to grow a cluster of 15-17 AI first companies"
    }
  ];

  return (
    <>
    <Eventimg/>
    <div className="container mx-auto px-4 py-8">
      {/* <Eventimg /> */}
      <div className="events-content">
        <h1 className='text-sm uppercase text-blue-700 mb-4'>Events</h1>
        
        <div className="events-header flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className='font-semibold text-xl text-neutral-900'>
            <span className='block'>Join our next upcoming event</span>
          </h2>
        </div>
        
        <div className="events-list space-y-4">
          {eventItems.map((item, index) => (
            <EventItem 
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>


    <div className='bg-orange-700 p-10   mt-6'>
      <h1 className='font-semibold text-2xl text-gray-200  '>
        <span className='block'>Ready to Join Our </span>
        <span>School Community</span>
          </h1>


      <p className='text-gray-300 text-sm mt-2'>Our staff are highly trained, experienced, and deeply committed to the success and well-being of each student</p>
          
      <Link href="/admission" >

      <button className='rounded-md mt-5 py-2 px-5 border-none bg-[#f5f5f5]  text-gray-900 text-lg 
                          transform transition-all 
                hover:scale-105 hover:shadow-2xl font-medium '>Enroll now</button>
</Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        <div className='bg-white flex flex-col gap-2 p-2 rounded-md'>
        <h1 className='font-semibold  text-2xl'>1  </h1>
        <h1 className='font-semibold text-gray-900 text-lg'>Qualified and Caring Teachers  </h1>
        <p className='text-gray-600 text-sm mt-2'>Our staff are highly trained, experienced, and deeply committed to the success and well-being of each student</p>
        </div>

        <div className='  bg-white flex flex-col gap-2 p-2 rounded-md '>
        <h1 className='font-semibold text-gray-900 text-2xl'>2  </h1>
        <h1 className='font-semibold text-gray-900 text-lg'>Innovative Learning Environment </h1>
        <p className='text-gray-600 text-sm mt-2'>We utilize modern teaching tools and technology to make learning engaging and effective.        </p>
        </div>

        <div className='bg-white flex flex-col gap-2 p-2 rounded-md '>
        <h1 className='font-semibold text-gray-900 text-2xl'>3  </h1>
        <h1 className='font-semibold text-gray-900 text-xl'>Global Perspective</h1>
        <p className='text-gray-600 text-sm mt-2'>We encourage students to think globally and embrace diverse cultures and ideas.
        </p>
        </div>
        <div className='bg-white flex flex-col gap-2 p-2 rounded-md'>
        <h1 className='font-semibold text-gray-900 text-2xl'>4  </h1>
        <h1 className='font-semibold text-gray-900 text-xl'>Parental Involvement  </h1>
        <p className='text-gray-600 text-sm mt-2'>We recognize the importance of a strong partnership between home and school, and we invite parents to be actively involved in their child’s educational journey.</p>
        </div>





</div>
    </div>




    </>
  );
};

export default Event;