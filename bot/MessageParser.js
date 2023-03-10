// in MessageParser.jsx
import React, { useState, useEffect } from 'react';

const MessageParser = ({ children, actions }) => {
    const [messageNumber, setMessageNumber] = useState(0);

    //todo
    const parse = (message) => {
        if (messageNumber == 0) {
            actions.userOutput.name = message;
            actions.askOpenQuestion(actions.textData.phoneQuestion);
            setMessageNumber(1);
        }
        else if (messageNumber == 1) {
            actions.userOutput.phoneNumber = message;
            actions.askOpenQuestion(actions.textData.ageQuestion);
            setMessageNumber(2);
        }
        else if (messageNumber == 2) {
            actions.userOutput.age = message;
            actions.askOpenQuestion(actions.textData.helpQuestion);
            setMessageNumber(3);
        }
        else if (messageNumber == 3) {
            actions.userOutput.content = message;
            actions.endConversation();
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: actions
                });
            })}
        </div>
    );
};

export default MessageParser;