import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Personal Info Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Personal Information
          </h2>
          <p className="text-gray-700">
            Hello everyone, my name is Lt.Satheesha K.M and I am the Head of the Electronics and Communication Engineering Department here at Karnataka Govt. Polytechnic. I was born on 21-03-1988 in Karnataka and Completed Working as Associative NCC Officer (ANO)
            from 14-11-2024.
          </p>
          
        </div>

        {/* Education Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Education & Training
          </h2>
          <p className="text-gray-700">
          B.E. in Electronics & Communication Engineering (First Class with Distinction) from KVGCE, Sullia under VTU Belgaum.
M.Tech in Digital Electronics & Communication (First Class with Distinction) from NMAMIT, Nitte under VTU Belgaum.
Pursuing PHD in Image Processing at Srinivas University, Mangalore.
          </p>
        </div>

        {/* Skills Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Skills & Expertise
          </h2>
          <p className="text-gray-700">  
          Proficient in Electronics and Communication Engineering principles, with expertise in Industrial Internet of Things (IIoT), Automation & Robotics, Microcontrollers & Applications, ARM Controllers, Embedded Systems, and Digital Electronics. Strong knowledge of C Programming, Basic Electrical & Electronics Engineering, and Analog Communication.
          </p>
        </div>

        {/* Experience Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Professional Experience
          </h2>
          <p className="text-gray-700"> 
- NCC Caretaker Officer from 16-11-2022 to 13-10-2024.  <br />
- Completed a 3-Month Pre-Commission Course (SD 173) at Officers Training Academy (OTA), Kamptee, Nagpur, under the Ministry of Defense, India (29-07-2024 to 09-11-2024), obtaining the rank of Lieutenant (NCC Commissioned Officer) as per official orders dated 28-10-2024.  <br />
- Worked as a Member of the E&C Engineering Curriculum Committee (C-15 and C-20).  <br />
- Held key positions, including HOD of E&C Department, AICTE Coordinator, SAKALA Coordinator, Integrated Website Coordinator, Khajane-2 Coordinator, and Spoken Tutorial Coordinator.
          </p>
        </div>

        {/* Achievement Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Achievements
          </h2>
          <p className="text-gray-700">
 Life member of Membership of Indian Society of 
Technical Education (ISTE) <br />
 Four international level Journal Paper Published  <br />
 One national level Technical Paper Published and 
Presented <br />
 District level Master Trainer for Electoral Purification 
(ERO NET) software <br />
 District level Master Trainer for Election Process for 
returning officers and officials for Loka Sabha and 
Vidhana Sabha Election <br />
 Master Trainer for Election Process for returning officers 
and officials for Corporation, Zilla and Taluk Panchayath 
and Panchayath Election <br />
 District Nodal officer - Aadhar Implementation 
          </p>
        </div>

         {/* Mission Card */}
         <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Mission Statement
          </h2>
          <p className="text-gray-700">
          My mission is to utilize my expertise in electronics and communication engineering to drive innovation in digital systems, embedded technologies, and automation, contributing to advancements in education, research, and industry applications while fostering technical excellence and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
