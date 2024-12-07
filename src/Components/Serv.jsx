












import { NotebookIcon } from 'lucide-react';
import React from 'react';

const ServiceCard = ({ icon, title, description, className = '' }) => (
  <div className={`flex flex-col justify-center gap-4 p-5 text-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
    <div className="icon-div flex items-center justify-center p-3 h-12 w-12 bg-orange-600 backdrop-blur-sm rounded-lg shadow-md">
      {icon}
    </div>
    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
    <p className="text-gray-900 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const Services = () => {
  return (
    <div className="relative bg-white py-16" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* First grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <ServiceCard 
            icon={<NotebookIcon className="text-2xl text-white" />}
            title="Moral Standards"
            description="This way we aim to grow a cluster of 15-17 AI first companies over this AI decade."
          />
          <ServiceCard 
            icon={<NotebookIcon className="text-2xl text-white" />}
            title="Best Curriculum"
            description="This way we aim to grow a cluster of 15-17 AI first companies over this AI decade."
          />
          <ServiceCard 
            icon={<NotebookIcon className="text-2xl text-white" />}
            title="Best Curriculum"
            description="This way we aim to grow a cluster of 15-17 AI first companies over this AI decade."
          />

<ServiceCard 
            icon={<NotebookIcon className="text-2xl text-white" />}
            title="Strong Fundamentals"
            description="This way we aim to grow a cluster of 15-17 AI first companies over this AI decade."
          />
          <ServiceCard 
            icon={<NotebookIcon className="text-2xl text-white" />}
            title="Best Tutors"
            description="This way we aim to grow a cluster of 15-17 AI first companies over this AI decade."
          />
          <ServiceCard 
            icon={<NotebookIcon className="text-2xl text-white" />}
            title="Additional Service"
            description="This way we aim to grow a cluster of 15-17 AI first companies over this AI decade."
          />


        </div>


      </div>
    </div>
  );
};

export default Services;