
// import Admission from '@/Components/Admission'
// import React from 'react'

// const page = () => {
//   return (
//     <div className='bg-blue-200 flex justify-center items-center'>
//         <Admission/>
      
//     </div>
//   )
// }

// export default page



import Admission from '@/Components/Admission'
import React from 'react'

const Page = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white flex justify-center items-center p-4'>
      <div className='w-full max-w-xl'>
        {/* <div className='bg-white/10 backdrop-blur-md shadow-xl rounded-xl overflow-hidden'> */}
          <Admission />
        {/* </div> */}
      </div>
    </div>
  )
}

export default Page