import React from "react";
import { Typewriter } from 'react-simple-typewriter'


const Info = () => {
  return (
    <div className=" flex flex-col text-center">
        <div className="text-center mt-12">
      <h2 className="text-xl md:text-4xl text-white font-bold font-custom mb-4">
      Our platform will aim to replace outdated email 
          information management for students, faculty, and college staff.
      </h2>
      <p className="text-base md:text-xl mb-4 text-gray-400 font-custom md:mt-6">
      culture and simplify information management for 
      </p>
    
      <h2 className="text-3xl md:text-4xl font-bold font-custom mb-4">
        <div className="text-emerald-600">
          <Typewriter
            words={[
              "students",
              "faculty",
              "college staff",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </h2>
    </div>

    <div className="text-center mt-12 md:mt-20">
      <h2 className="text-xl md:text-4xl text-white font-bold font-custom mb-4">
      Never miss vital information or notifications
          from college authorities also brings students together
      </h2>
      <p className="text-base md:text-xl mb-4 text-gray-400 font-custom md:mt-6">
      making it
          simpler to 
     </p>
    
      <h2 className="text-3xl md:text-4xl font-bold font-custom mb-4">
        <div className="text-emerald-600">
          <Typewriter
            words={[
              "share resources",
              "connect with others",
              "work together",
            ]}

            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </h2>
    </div>
    </div>
  );
}

export default Info;
