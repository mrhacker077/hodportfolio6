import React from "react";

import pic from "../ec.jpg";


function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div
            className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <span className="text-red-700 font-bold">Lecturer</span>
            </div>

            <br />
            <p className="text-sm md:text-xl text-justify">
            My name is Lt. Satheesha K.M, and I am the Head of the Electronics and Communication Engineering Department at Karnataka Govt. Polytechnic, as well as an active member of the NCC. With a strong passion for innovation, education, and discipline, I strive to create an engaging learning environment that equips students with the skills and expertise to excel in both academics and leadership.
            </p>
          </div>
          <div
            className="md:w-1/3 md:ml-48 md:mt-30 mt-8 order-1"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src={pic}
              className="rounded-full md:w-[350px] md:h-[350px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
