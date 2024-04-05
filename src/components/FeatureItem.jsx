import React from "react";

function FeatureItem({ icon: Icon, iconBgColor,title, description }) {
  return (
    <div className="flex flex-col text-center sm:text-left">
      <div style={{ background: iconBgColor }} className="h-12 w-12 rounded-[19px] m-auto flex justify-center items-center drop-shadow-md sm:ml-0">
        {/* Render the Icon component directly */}
        {Icon && <Icon className="h-6 mb-1 text-white" />}
      </div>
      <h4 className="mt-6 font-semibold font-custom3 text-gray-400  text-2xl">{title}</h4>
      <p className="text-base mt-2 text-white ">{description}</p>
    </div>
  );
}

export default FeatureItem;
