import { Link, useNavigate } from "react-router-dom"
import Chat from "../../components/chat/Chat"
import List from "../../components/list/List"
import "./profilePage.scss"
import apiRequest from "../../lib/apiRequest"

import React from 'react'

const ProfilePage = () => {
    const navigate = useNavigate();
    const handleLogout =()=>{
        try {
            const res = apiRequest.post("/auth/logout");
            localStorage.removeItem("user")
            navigate("/");

        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="profilePage">
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span>Avatar: <img src="/user.jpg" alt="" /></span>
                    <span>Username: <b>Alif Al Razi</b></span>
                    <span>Email: <b>alif@gmail.com</b></span>
                    <button onClick={handleLogout}>Log out</button>
                </div>

                <div className="title">
                    <h1>My List</h1>
                    <Link to="/newPost"><button>Create New post</button></Link>
                    
                </div>
                <List/>
                <div className="title">
                    <h1>Saved List</h1>
                </div>
                <List/>
            </div>
        </div>
        <div className="chatcontainer">
            <div className="wrapper">
                <Chat/>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage