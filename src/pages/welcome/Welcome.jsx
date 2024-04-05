import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Registration from "../register/Registration.jsx";
import Hero from "../../components/Hero.jsx";
import Features from "../../components/Features.jsx";
import Footer from "../../components/Footer.jsx";
import Info from "../../components/Info.jsx";

const Welcome = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // const location = useLocation(); // Get the current location object

  // Render the modal only when the route matches "/registration"
  // const isRegistrationRoute = location.pathname === '/registration';

  return (
    <div className="bg-gray-950  min-h-screen flex flex-col justify-center">
      <header className="h-12 md:mb-10 ">
        <Navbar />
      </header>
      <main className="flex-1  justify-center items-center  p-4 md:p-8">
        <div className="flex justify-center mt-4 md:mt-12">
          <Hero />
        </div>
        <div className="flex justify-center mt-8 md:mt-24">
          <Features />
        </div>
        <div className="flex justify-center text-center mt-8 md:mt-24">
          <Info />
        </div>
      </main>
      <footer className="p-4">
        <div className="flex justify-center w-screen mt-8 md:mt-24">
          <Footer />
        </div>
      </footer>
      {/* {isRegistrationRoute && <Registration onClose={() => {}} />} Render the modal when on the /registration route */}
      {showModal && <Registration onClose={closeModal} />}{" "}
      {/* Render the Registration page as a modal when showModal is true */}
    </div>
  );
};

export default Welcome;
