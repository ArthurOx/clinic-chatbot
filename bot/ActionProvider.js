import { createCustomMessage, createClientMessage } from 'react-chatbot-kit';
import React, { useState, useEffect } from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const [messageBar, showMessageBar] = useState(false);

    const handleLanguagePicked = (chosenLanguage) => {
        console.log("chosen language is: " + chosenLanguage);
        const introMessage = createCustomMessage('Intro', 'intro');
        setState((prev) => ({
            ...prev,
            messages: [introMessage],
        }));
    };

    const handleStartConversation = () => {
        const botMessage = createCustomMessage('Test', 'scroller');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleClickedContinue = () => {
        const botMessage = createChatBotMessage('would you like to contact a lawyer?');
        const yesNoQuestion = createCustomMessage('yesNoQuestion', 'yesNoQuestion');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage, yesNoQuestion],
        }));
    };

    const handleYesNoAnswer = (answer) => {
        const clientMessage = createClientMessage(answer);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, clientMessage],
        }));
    };

    useEffect(() => {
        if (messageBar) {
            document.getElementsByClassName('react-chatbot-kit-chat-input-form')[0].style.display = 'flex';
        } else {
            document.getElementsByClassName('react-chatbot-kit-chat-input-form')[0].style.display = 'none';
        }
    }, [messageBar]);

    // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleLanguagePicked,
                        handleStartConversation,
                        handleClickedContinue,
                        handleYesNoAnswer
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;