import { GlobeLock, Heart, UsersRound, Clock, MousePointerClick, AudioWaveform, Boxes, BellRing } from "lucide-react";
import React from "react";
import FeatureItem from "./FeatureItem.jsx";

function Features() {
  return (
    <section className="container mt-16 flex flex-col items-center">
     <hr className="border-t-2 border-orange-500 my-4 w-3/4" />

      <h2 className="text-3xl md:text-6xl mt-16 md:mt-28 font-custom text-white font-bold text-center sm:text-left">
        Explore
      </h2>

      <div className="mt-10 md:mt-16 mb-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
      <FeatureItem
          icon={GlobeLock}
          iconBgColor="#bd5911"
          title="Centralized Platform"
          description=" All-in-one platform for students, faculty, and staff"
        />
        <FeatureItem
          icon={UsersRound}
          iconBgColor="#0f850d"
          title="Community Connection"
          description="Connect, support, and grow together"
        />
          <FeatureItem
            icon={BellRing}
            iconBgColor="#e30967"
            title="Instant Updates"
            description=" Real-time notifications for vital information"
          />
        <FeatureItem
          icon={Boxes}
          iconBgColor="#0d26b5"
          title="Learn and Collaborate"
          description="Seamlessly share resources, connect with peers, and collaborate on projects with ease"
        />
        <FeatureItem
          icon={Clock}
          iconBgColor="#62117a"
          title="Empowering Educators"
          description="Easily share study materials, projects, and assignments for enhanced teaching and engagement"
        />
      </div>
      <hr className="border-t-2 border-orange-500 my-16 w-4/5" />
    </section>
  );
}

export default Features;
