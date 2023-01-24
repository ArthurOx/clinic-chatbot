import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function RtlMessage(props) {

    return (
        <div className='react-chatbot-kit-chat-bot-message' style={{ direction: 'rtl' }}>
            <span>{props.payload.text}</span>
        </div>
    )
}

