import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";

export default function ChatInput({ handleSendMsg }) {
    const [msg, setMsg] = useState("");

    const sendChat = (event) => {
        event.preventDefault();
        if (msg.length > 0) {
            handleSendMsg(msg);
            setMsg("");
        }
    };

    return (
        <div>
            <form className="" onSubmit={(event) => sendChat(event)}>
                <input
                    className="h-8 p-2 w-full focus:outline-none rounded-bl-lg"
                    type="text"
                    placeholder="type your message here"
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                />
                <button type="submit" className="w-16 font-bold tracking-wider text-white bg-gradient-to-r from-primary to-tertiary">
                    <IoMdSend />
                </button>
            </form>
        </div>
    );
}
