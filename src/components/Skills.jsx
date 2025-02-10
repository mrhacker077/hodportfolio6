import React from "react";
import iot from "../iot.avif";
import ar from "../ar.jpg";
import es from "../es.jpg";
import c from "../c.jpg";
import de from "../de.jpg";
import ac from "../ac.png";



function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: iot,
      name: "IOT",
      description:
        "The Internet of Things (IoT) connects physical devices to the internet, enabling data exchange and automation.",
    },
    {
      id: 2,
      logo: ar,
      name: "Automation & Robotics",
      description:
        "Automation & Robotics involve using technology to perform tasks with minimal human intervention, enhancing efficiency and productivity.",
    },
    {
      id: 3,
      logo: es,
      name: "Embedded System",
      description:
        "An Embedded System is a specialized computing system designed to perform dedicated functions within a larger device or application.",
    },
    {
      id: 4,
      logo: c,
      name: "C Programming",
      description:
        "C Programming is a fast and efficient language used for system and application development.",
    },
    {
      id: 5,
      logo: de,
      name: "Digital Electronics",
      description:
        "Digital Electronics deals with electronic circuits that use digital signals for processing and controlling operations.",
    },
    {
      id: 6,
      logo: ac,
      name: "Analog Communication",
      description:
        "Analog Communication transmits information using continuous signals that vary in amplitude, phase, or frequency.",
    }

  ];

  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-4xl font-bold mb-5">Skills</h1>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 my-5"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          {cardItem.map(({ id, logo, name, description }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 bg-blue-200"
              key={id}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                src={logo}
                className="w-[140px] h-[140px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
