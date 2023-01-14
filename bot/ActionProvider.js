import React from 'react';
import { createCustomMessage } from 'react-chatbot-kit';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleLanguagePicked = (chosenLanguage) => {
        console.log("chosen lang is: " + chosenLanguage);
        const introMessage = createCustomMessage('Intro', 'intro');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, introMessage],
        }));
    };

    const handleStartConversation = () => {
        const botMessage = createCustomMessage('Test', 'scroller');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleLanguagePicked,
                        handleStartConversation
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;