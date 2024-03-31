import React from 'react'

const Card = ({ title}) => {
  return (
    <div className="relative h-[110px] w-[110px] md:w-[150px] md:h-[150px]  lg:w-[200px] lg:h-[200px] rounded-md">
      <img
        src="https://picsum.photos/id/239/300/200"
        alt="AirMax Pro"
        className="z-0 w-full h-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-md"></div>
      <div className="bottom-4 left-4 text-left">
        <p className="mt-1 text-xs font-medium text-center text-black text-wrap">
          {title}
        </p>
      </div>
    </div>
  );
};


export default Card