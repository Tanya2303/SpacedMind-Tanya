import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";

export default function Chat() {
    const navigate = useNavigate();
    const socket = useRef();
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(async () => {
        if (!localStorage.getItem(process.env.REACT_APP_API_URL)) {
            navigate("/login");
        } else {
            setCurrentUser(
                await JSON.parse(
                    localStorage.getItem(process.env.REACT_APP_API_URL)
                )
            );
        }
    }, []);
    useEffect(() => {
        if (currentUser) {
            socket.current = io(host);
            socket.current.emit("add-user", currentUser._id);
        }
    }, [currentUser]);
    const handleChatChange = (chat) => {
        setCurrentChat(chat);
    };
    return (
        <>
            <div className="">
                <div className="">
                    <Contacts contacts={contacts} changeChat={handleChatChange} />
                    <ChatContainer currentChat={currentChat} socket={socket} />
                </div>
            </div>
        </>
    );
}
