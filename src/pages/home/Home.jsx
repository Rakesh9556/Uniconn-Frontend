import React from 'react'
import { Sidebar } from '../../components/SIdebar'
import Navbar from '../../components/Navbar'
import HomeNavbar from '../../components/HomeNavbar'
import NewNavbar from '../../components/NewNavbar'

const Home = () => {
  return (
    <div className='bg-gray-950'>
      <NewNavbar />
      <Sidebar />
    </div>
  )
}

export default Home
