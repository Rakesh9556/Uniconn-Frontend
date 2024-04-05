import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import logo from "../assets/icons/logo.svg";

const Footer = () => {
  return (
    <section className="w-full rounded-lg bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="inline-flex items-center">   
                <img src={logo} alt="Logo" className="-ml-4 w-24 md:w-28" />
                <span className="-ml-8 -mb-2 text-lg md:text-xl font-custom font-bold text-white">Uniconn</span>
              </div>
            </a>
          </div>
          <div className=" p-8">
            <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5">
                <a className="font-medium text-gray-200 hover:text-gray-700" href="#">
                  Privacy Policy
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium text-gray-200 hover:text-gray-700" href="#">
                  Terms of Service
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium text-gray-200 hover:text-gray-700" href="#">
                  Return Policy
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium text-gray-200 hover:text-gray-700" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap">
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 border border-gray-300 hover:border-gray-400">
                    <Twitter />
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 border border-gray-300 hover:border-gray-400">
                    <Facebook />
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 border border-gray-300 hover:border-gray-400">
                    <Instagram />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
