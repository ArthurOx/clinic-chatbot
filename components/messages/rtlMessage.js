import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function RtlMessage(props) {

    return (
        <div className='react-chatbot-kit-chat-bot-message' style={{ direction: 'rtl', textAlign: 'right' }}>
            <span>{props.payload.text}</span>
        </div>
    )
}

