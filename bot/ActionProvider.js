import { createCustomMessage, createClientMessage } from 'react-chatbot-kit';
import React, { useState, useEffect } from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const [messageBar, showMessageBar] = useState(false);
    const [language, setLanguage] = useState('');
    const [textData, setTextData] = useState({});

    const handleLanguagePicked = (chosenLanguage) => {
        setLanguage(chosenLanguage);
        const dataInLanguage = [{
            clinic: {
                id: 0,
                description: "description1",
                examples: ["example1", "example2", "example3"]
            }
        },
        {
            clinic: {
                id: 1,
                description: "description2",
                examples: ["example3", "example4", "example5"]
            }
        },
        {
            clinic: {
                id: 2,
                description: "description3",
                examples: ["example6", "example7", "example8"]
            }
        },
        {
            clinic: {
                id: 3,
                description: "description4",
                examples: ["example3", "example3", "example5"]
            }
        }];
        setTextData(dataInLanguage);
        const introMessage = createCustomMessage('Intro', 'intro');
        setState((prev) => ({
            ...prev,
            messages: [introMessage],
        }));
    };

    const handleStartConversation = (event) => {
        event.currentTarget.disabled = true;
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
    }

    const handleYesNoAnswer = (answer) => {
        const clientMessage = createClientMessage(answer);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, clientMessage],
        }));

        if (answer === "Yes") {
            askName();
        }
    };

    const askName = () => {
        const nameQuestion = createChatBotMessage('What is your name?');
        showMessageBar(true);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, nameQuestion],
        }));
    }

    const askQuestion = (question) => {
        const nameQuestion = createChatBotMessage(question);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, nameQuestion],
        }));
    }

    const endConversation = () => {
        showMessageBar(false);
        const endMessage = createChatBotMessage('Thank you for contacting us. We will get back to you shortly.');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, endMessage],
        }));
    }

    useEffect(() => {
        if (messageBar) {
            document.getElementsByClassName('react-chatbot-kit-chat-input-form')[0].style.display = 'flex';
        } else {
            document.getElementsByClassName('react-chatbot-kit-chat-input-form')[0].style.display = 'none';
        }
    }, [messageBar]);

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleLanguagePicked,
                        handleStartConversation,
                        handleClickedContinue,
                        handleYesNoAnswer,
                        askQuestion,
                        endConversation,
                        setLanguage,
                        textData
                    }
                });
            })}
        </div>
    );
};

export default ActionProvider;