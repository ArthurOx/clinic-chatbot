// in MessageParser.jsx
import React, { useState, useEffect } from 'react';

const MessageParser = ({ children, actions }) => {
    const [messageNumber, setMessageNumber] = useState(0);

    //todo
    const parse = (message) => {
        if (messageNumber == 0) {
            actions.askQuestion('Phone number?');
            setMessageNumber(1);
        }
        else if (messageNumber == 1) {
            actions.askQuestion('Age?');
            setMessageNumber(2);
        }
        else if (messageNumber == 2) {
            actions.askQuestion('What can we help you with?');
            setMessageNumber(3);
        }
        else if (messageNumber == 3) {
            actions.endConversation();
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: actions,
                });
            })}
        </div>
    );
};

export default MessageParser;