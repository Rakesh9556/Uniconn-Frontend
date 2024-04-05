import React from 'react'
import { Home, BarChart, Copy, Bookmark, Users, Settings } from 'lucide-react'
import logo from "../assets/icons/logo.svg";


export function Sidebar() {
  return (
    <aside className="flex h-screen w-16 flex-col items-center overflow-y-auto border-r bg-white py-8">
      <nav className="flex flex-1 flex-col items-center space-y-6">
        <a href="#">
        <img src={logo} alt="Logo" className="w-20 md:w-44" />
        </a>
        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <Home size={24} />
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <BarChart size={24} />
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <Copy size={24} />
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <Bookmark size={24} />
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <Users size={24} />
        </a>
      </nav>

      <div className="flex flex-col items-center space-y-6">
        <a
          href="#"
          className="rounded-lg bg-gray-100 p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none"
        >
          <Settings size={24} />
        </a>

        <a href="#">
          <img
            className="h-8 w-8 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="User avatar"
          />
        </a>
      </div>
    </aside>
  )
}
