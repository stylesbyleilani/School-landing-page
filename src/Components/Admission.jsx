



"use client"

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Admission = () => {
  const [formData, setFormData] = useState({
    class: '',
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    bloodGroup: '',
    religion: '',
    healthCondition: '',
    email: '',
    phoneNumber: '',
    passportFile: null
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    success: false,
    error: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(String(phone));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    const requiredFields = ['class', 'firstName', 'lastName', 'birthDate', 'gender', 'email', 'phoneNumber'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      setSubmissionStatus({
        success: false,
        error: true,
        message: `Please fill in all required fields: ${missingFields.join(', ')}`
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmissionStatus({
        success: false,
        error: true,
        message: 'Please enter a valid email address'
      });
      return;
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      setSubmissionStatus({
        success: false,
        error: true,
        message: 'Please enter a valid phone number'
      });
      return;
    }

    try {
      emailjs.init("DEjMHIOUVrZShrmcu");

      const emailParams = {
        to_email: "mustaphaadeola948@gmail.com",
        from_name: "Admission Portal",
        class: formData.class,
        firstName: formData.firstName,
        middleName: formData.middleName || 'N/A',
        lastName: formData.lastName,
        birthDate: formData.birthDate,
        gender: formData.gender,
        bloodGroup: formData.bloodGroup || 'Not Specified',
        religion: formData.religion || 'Not Specified',
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        healthCondition: formData.healthCondition || 'None',
        passportFileName: formData.passportFile ? formData.passportFile.name : 'No file uploaded'
      };
      console.log(emailParams, "EMAIL")

      const response = await emailjs.send(
        "service_pflq5u4", 
        "template_avekh1w", 
        emailParams
      );
console.log(response)
      setSubmissionStatus({
        success: true,
        error: false,
        message: 'Application submitted successfully!'
      });
      setFormData({
        class: '',
        firstName: '',
        middleName: '',
        lastName: '',
        birthDate: '',
        gender: '',
        bloodGroup: '',
        religion: '',
        email: '',
        phoneNumber: '',
        healthCondition: '',
        passportFile: null
      });

    } catch (error) {
      setSubmissionStatus({
        success: false,
        error: true,
        message: 'Failed to submit application. Please try again.'
      });
      console.error('Submission error:', error);
    }
  };

  return (
    <div className='bg-orange-950 min-h-screen py-12 px-4 flex items-center justify-center'>
      <div className='w-full max-w-2xl bg-orange-900 rounded-xl shadow-2xl overflow-hidden'>
        <div className='bg-orange-800 p-6 text-center'>
          <h1 className='text-2xl font-bold text-white'>Student Admission Form</h1>
          <p className='text-orange-200 mt-2'>Please fill out all required information carefully</p>
        </div>

        {submissionStatus.error && (
          <div className='bg-red-600 text-white p-4 text-center'>
            {submissionStatus.message}
          </div>
        )}
        
        {submissionStatus.success && (
          <div className='bg-green-600 text-white p-4 text-center'>
            {submissionStatus.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className='p-6 space-y-6'>
          <div className='bg-orange-850 p-5 rounded-lg'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Class Information</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block text-orange-200 mb-2'>Select Class</label>
                <select 
                  name="class"
                  value={formData.class}
                  onChange={handleInputChange}
                  className='w-full p-3 rounded-md bg-orange-800 text-white border-2 border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
                  required
                >
                  <option value="">Select Class</option>
                  <option value="PreNursery">Pre-Nursery</option>
                  <option value="Nursery">Nursery</option>
                  <option value="KG">Kindergarten</option>
                  <option value="1st">1st Grade</option>
                  <option value="2nd">2nd Grade</option>
                  <option value="3rd">3rd Grade</option>
                </select>
              </div>
            </div>
          </div>

          <div className='bg-orange-850 p-5 rounded-lg'>
            <h2 className='text-2xl font-semibold text-white mb-4'>Personal Details</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              <div>
                <label className='block text-orange-200 mb-2'>First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder='First Name'
                  className='w-full p-3 rounded-md bg-orange-800 text-white border-2 border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
                  required
                />
              </div>
              <div>
                <label className='block text-orange-200 mb-2'>Middle Name</label>
                <input 
                  type="text" 
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  placeholder='Middle Name'
                  className='w-full p-3 rounded-md bg-orange-800 text-white border-2 border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
              </div>
              <div>
                <label className='block text-orange-200 mb-2'>Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder='Last Name'
                  className='w-full p-3 rounded-md bg-orange-800 text-white border-2 border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
                  required
                />
              </div>
            </div>
          </div>

          <div className='bg-orange-850 p-5 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-orange-200 mb-2'>Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder='student@example.com'
                className='w-full p-3 rounded-md bg-orange-800 text-white border-2 border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
                required
              />
            </div>
            <div>
              <label className='block text-orange-200 mb-2'>Phone Number</label>
              <input 
                type="tel" 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder='+1 (123) 456-7890'
                className='w-full p-3 rounded-md bg-orange-800 text-white border-2 border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
                required
              />
            </div>
          </div>

          <div className='bg-orange-850 p-5 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-orange-200 mb-2'>Date of Birth</label>
              <input 
                type="date" 
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                className='w-full p-3 rounded-md bg-orange-800 text-white border-2 border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
                required
              />
            </div>
            <div>
              <label className='block text-orange-200 mb-2'>Gender</label>
              <select 
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className='w-full p-3 rounded-md bg-orange-800 text-white border-2 border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className='bg-orange-850 p-5 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-orange-200 mb-2'>Blood Group</label>
              <select 
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleInputChange}
                className='w-full p-3 rounded-md bg-orange-800 text-white border-2 border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div>
              <label className='block text-orange-200 mb-2'>Religion</label>
              <select 
                name="religion"
                value={formData.religion}
                onChange={handleInputChange}
                className='w-full p-3 rounded-md bg-orange-800 text-white border-2 border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500'
              >
                <option value="">Select Religion</option>
                <option value="Islam">Islam</option>
                <option value="Christianity">Christianity</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Other">Other</option>
                <option value="None">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className='bg-orange-850 p-5 rounded-lg'>
            <label className='block text-orange-200 mb-2'>Health Conditions (if any)</label>
            <textarea 
              name="healthCondition"
              value={formData.healthCondition}
              onChange={handleInputChange}
              placeholder='Describe any medical conditions or allergies'
              className='w-full p-3 rounded-md bg-orange-800 text-white border-2 border-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[100px]'
            />
          </div>

          <div className='bg-orange-850 p-5 rounded-lg'>
            <label className='block text-orange-200 mb-2'>Upload Student Photo</label>
            <div className='border-2 border-orange-600 p-4 rounded-md'>
              <input 
                type="file" 
                name="passportFile"
                onChange={handleInputChange}
                accept=".jpg,.jpeg,.png,.pdf"
                className='w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-orange-500 file:text-white hover:file:bg-orange-600'
              />
              <p className='text-xs text-orange-300 mt-2'>Accepted formats: JPG, PNG, PDF. Max size: 2MB</p>
            </div>
          </div>

          <div className='pt-6'>
            <button 
              type="submit" 
              className='w-full bg-green-600 text-white py-4 rounded-md hover:bg-green-700 transition-colors text-lg font-semibold'
            >
              Submit Admission Application
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Admission








