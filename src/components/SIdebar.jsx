import React from 'react'
import { Home,Bookmark,Boxes,BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench, Users, Users2 } from 'lucide-react'
import Profile from "./Profile.jsx";



export function Sidebar() {
  return (
    <aside className="flex h-screen w-80 flex-col overflow-y-auto border-r bg-gray-950 shadow-lg px-5 py-8">
      <Profile />
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">analytics</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              href="#"
            >
              <Home className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Home</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Users className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Friends</span>
            </a>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">content</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Boxes className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Community</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Notifications</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Paperclip className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Checklists</span>
            </a>
          </div>

          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">Customization</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Brush className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Themes</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wrench className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Setting</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  )
}
