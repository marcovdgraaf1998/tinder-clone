import React from 'react';
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Sarah"
                message="Hey! how are you :)" 
                timestamp="35 minutes ago"
                profilePic="https://randomuser.me/api/portraits/women/6.jpg"
            />
            <Chat 
                name="Ellen"
                message="What's up <3?" 
                timestamp="55 minutes ago"
                profilePic="https://randomuser.me/api/portraits/women/45.jpg"
            />
            <Chat 
                name="Sandra"
                message="Ola!" 
                timestamp="3 days ago"
                profilePic="https://randomuser.me/api/portraits/women/59.jpg"
            />
            <Chat 
                name="Natasha"
                message="Oops there he is!" 
                timestamp="1 week ago"
                profilePic="https://randomuser.me/api/portraits/women/70.jpg"
            />



        </div>
    )
}

export default Chats
