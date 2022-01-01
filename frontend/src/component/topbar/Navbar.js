
import React, { useContext } from "react";
import './navbar.css';
import {Person, Search ,Chat,Notifications} from "@material-ui/icons";
import {Link}  from "react-router-dom"
import { AuthContext } from "../../contex/AuthContext";

export default function Navbar() {
    const  { user} =useContext(AuthContext)
    const PF =process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/">
                <span className="logo">SastaFacebook</span></Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                 <Search  className="searchicon"/>
                 <input placeholder="Search for friend,post or video" className="searchinput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLink">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcon">
                <div className="topbarIconiteam">
                  <Person/> 
                  <span className="topbariconbadges">1</span> 
                </div>
                <div className="topbarIconiteam">
                  <Chat/> 
                  <span className="topbariconbadges">2</span> 
                </div>
                <div className="topbarIconiteam">
                  <Notifications/> 
                  <span className="topbariconbadges">3</span> 
                </div>
            </div>
            </div>
           <Link to={`/profile/${user.username}`}> <img src={user.profilePicture?PF+user.profilePicture:PF+"person/noAvatar.png"} alt="" className="topbarImg" /></Link>

        </div>
    )

}
