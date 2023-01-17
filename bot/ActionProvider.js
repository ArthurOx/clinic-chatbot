import React from 'react';
import { createCustomMessage } from 'react-chatbot-kit';
import { animateScroll as scroll } from 'react-scroll'

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleLanguagePicked = (chosenLanguage) => {
        console.log("chosen language is: " + chosenLanguage);
        const introMessage = createCustomMessage('Intro', 'intro');
        setState((prev) => ({
            ...prev,
            messages: [introMessage],
        }));
    };

    const scrollToBottom = () => {
        scroll.scrollToBottom({
          duration: 500,
          smooth: 'easeInOutQuart'
        });
      }

    const handleStartConversation = (event) => {
        event.currentTarget.disabled = true;
        const botMessage = createCustomMessage('Test', 'scroller');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
        scrollToBottom(); //smooth scrolling function that doesn't work right now :(
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