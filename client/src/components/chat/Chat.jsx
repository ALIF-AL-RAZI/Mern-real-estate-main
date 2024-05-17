import "./chat.scss"

import React, { useState } from 'react'


const Chat = () => {


    const [chat, setChat] = useState(true)

  return (
    <div className="chat">
        <div className="messages">
            <h1>Meassages</h1>
            <div className="message">
                <img src="/user.jpg" alt="" />
                <span>Alif Al Razi</span>
                <p>
                    Lorem ipsum...
                </p>
            </div>
            <div className="message">
                <img src="/user.jpg" alt="" />
                <span>Alif Al Razi</span>
                <p>
                    Lorem ipsum...
                </p>
            </div>
            <div className="message">
                <img src="/user.jpg" alt="" />
                <span>Alif Al Razi</span>
                <p>
                    Lorem ipsum...
                </p>
            </div>
            <div className="message">
                <img src="/user.jpg" alt="" />
                <span>Alif Al Razi</span>
                <p>
                    Lorem ipsum...
                </p>
            </div>
            <div className="message">
                <img src="/user.jpg" alt="" />
                <span>Alif Al Razi</span>
                <p>
                    Lorem ipsum...
                </p>
            </div>
            <div className="message">
                <img src="/user.jpg" alt="" />
                <span>Alif Al Razi</span>
                <p>
                    Lorem ipsum...
                </p>
            </div>
        </div>
        {chat && <div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src="/user.jpg" alt="" />
                    Alif Al Razi
                </div>
                <span onClick={()=>setChat(null)} className="close">X</span>
            </div>
            <div className="center">
                <div className="chatMessage own">
                    <p>Lorem Ipsum</p>
                    <span>1 hour ago </span>
                </div>
                <div className="chatMessage">
                    <p>Lorem Ipsum</p>
                    <span>1 hour ago </span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem Ipsum</p>
                    <span>1 hour ago </span>
                </div>
                <div className="chatMessage">
                    <p>Lorem Ipsum</p>
                    <span>1 hour ago </span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem Ipsum</p>
                    <span>1 hour ago </span>
                </div>
                <div className="chatMessage">
                    <p>Lorem Ipsum</p>
                    <span>1 hour ago </span>
                </div>
                <div className="chatMessage own">
                    <p>Loremdfgsgfdgfdddddddddddddddddddddddd Ipsum</p>
                    <span>1 hour ago </span>
                </div>
            </div>
            <div className="bottom">
                <textarea name="" id=""></textarea>
                <button>Send</button>
            </div>
        </div>}
    </div>
  )
}

export default Chat