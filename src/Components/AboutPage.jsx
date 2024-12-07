






import React from 'react';
import AboutImg from './AboutImg';
import Why from './Why';

const AboutPage = () => {
  return (
    <>
      <AboutImg />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:mt-12">
        <header className="text-center mb-8 sm:mb-16">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            About Us
          </h1>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
          {/* Students Card */}
          <div className="bg-orange-500 rounded-md p-6 h-full flex flex-col">
            <div>
              <span className='block text-3xl text-neutral-900 font-semibold'>3K +</span>
              <span className='block text-gray-200 text-sm mb-4'>Students</span>
            </div>
            <h2 className='font-semibold mb-2'>Our Vision</h2>
            <p className='text-gray-200 text-sm'>
              Our vision is to create a learning environment where every student feels valued, challenged, and empowered to reach their full potential
            </p>
          </div>

          {/* Mission Card */}
          <div className=" bg-orange-500 rounded-md p-6 h-full flex flex-col">
            <h2 className='font-semibold mb-2'>Our Mission</h2>
            <p className='text-gray-200 text-sm'>
              Our mission is to provide a high-quality education that promotes intellectual growth, emotional well-being, and personal development. Through a balanced curriculum, experienced educators, and innovative teaching methods.
            </p>
          </div>

          {/* Core Values Card */}
        <div className="bg-orange-500 rounded-md p-6 h-full md:col-span-2 lg:col-span-1">
            <h2 className='font-semibold mb-4'>Core Values</h2>
            <ul className='space-y-2'>
              {[
                'Excellence: Striving for the highest standards in all aspects of education.',
                'Integrity: Fostering honesty, fairness, and ethical behavior.',
                'Respect: Valuing each individual\'s uniqueness and diversity.',
                'Innovation: Encouraging creativity, critical thinking, and problem-solving.',
                'Community: Building strong relationships between students, teachers, and families.'
              ].map((value, index) => (
                <li key={index} className='text-gray-200 text-sm'>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Why />
    </>
  );
};

export default AboutPage;