// in MessageParser.jsx
import React, { useState, useEffect } from 'react';

const MessageParser = ({ children, actions }) => {

    // const parse = (message) => {
    //     if (message.includes('hello')) {
    //         actions.handleHello();
    //     }

    //     if (message.includes('dog')) {
    //         actions.handleDog();
    //     }
    // };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions
                });
            })}
        </div>
    );
};

export default MessageParser;