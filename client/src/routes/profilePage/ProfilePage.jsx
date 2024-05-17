import Chat from "../../components/chat/Chat"
import List from "../../components/list/List"
import "./profilePage.scss"

import React from 'react'

const ProfilePage = () => {
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
                </div>

                <div className="title">
                    <h1>My List</h1>
                    <button>Create New post</button>
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