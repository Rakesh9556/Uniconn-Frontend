import React from "react";
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    // parent div
    <main className="container h-4/5 mt-4 md:flex flex-row-reverse justify-between items-center">
      <div className="md:max-w-[80%]">
        <img src="../../../images/amico.svg" alt="hero" />
      </div>

       {/* text section */}
      <div className="text-center sm:text-left md:max-w-[40%] mt-12">
      <h1 className="text-3xl md:text-6xl text-white font-bold font-custom mb-4">A university-focused social networking platform</h1>
      <p className="text-base md:text-xl mb-4 text-gray-400 font-custom md:mt-6">
           facilitating
      </p>
      <h1 className="text-3xl md:text-4xl font-bold font-custom mb-4"> 
      <div className="text-emerald-600">
      <Typewriter
          words={['student connections', 'information exchange', 'collaboration']}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
        />

      </div>
        
        </h1>
        <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8">
          <button className="p-2 md:px-4 rounded-lg text-black bg-blue-500">Learn More</button>
          <p className="font-semibold text-primary whitespace-nowrap flex items-center underline hover:scale-110 active:scale-95 duration-200 cursor-pointer">
            {/* <PlayIcon className="h-8" /> */}
            Watch the Video
          </p>
        </div>
      </div>
    </main>
  );
}

export default Hero;
