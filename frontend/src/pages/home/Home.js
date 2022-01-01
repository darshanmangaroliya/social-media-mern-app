import React from 'react'
import Feed from '../../component/feed/Feed'
import Rightbar from '../../component/rightbar/Rightbar'
import Sidebar from '../../component/Sidebar/Sidebar'
import Navbar from '../../component/topbar/Navbar'
import "./Home.css"
export default function Home() {
    return (
     <>
      <Navbar/>
      <div className="container">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
      </div>


      </>
    )
}
