import { createCustomMessage, createClientMessage } from 'react-chatbot-kit';
import React, { useState, useEffect } from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const [messageBar, showMessageBar] = useState(false);
    const [language, setLanguage] = useState('');
    const [textData, setTextData] = useState({});
    const [direction, setDirection] = useState('ltr');
    const [textAlign, setTextAlign] = useState('left');

    const getData = async (language) => {
        const response = await fetch(`/api/table?language=${language}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json());
        return response.message[0];
    };

    const handleLanguagePicked = async (chosenLanguage) => {
        setLanguage(chosenLanguage);
        const data = await getData(chosenLanguage);
        const dataInLanguage = data.content;
        setDirection(dataInLanguage.languageDir);
        if (direction === 'rtl') {
            setTextAlign('right');
        } else {
            setTextAlign('left');
        }
        setTextData(dataInLanguage);
        const introMessage = createCustomMessage('Intro', 'intro');
        setState((prev) => ({
            ...prev,
            messages: [introMessage],
        }));
    };

    const handleStartConversation = (event) => {
        event.currentTarget.disabled = true;
        const botMessage = createCustomMessage('ClinicScroller', 'scroller');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
        // scrollToBottom(); //smooth scrolling function that doesn't work right now :(
    };

    const handleClickedContinue = (event) => {
        event.currentTarget.disabled = true;
        const botMessage = createChatBotMessage(textData.contactQuestion.question);
        const yesNoQuestion = createCustomMessage('yesNoQuestion', 'yesNoQuestion');
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage, yesNoQuestion],
        }));
    }

    const handleYesNoAnswer = (answer, localizedAnswer) => {
        const clientMessage = createClientMessage(localizedAnswer);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, clientMessage],
        }));

        if (answer === "Yes") {
            askName();
        } else {
            answeredNo();
        }
    };

    const answeredNo = () => {
        const botMessage = createChatBotMessage(textData.contactQuestion.noAnswer);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleAgeAnswer = (answer) => {
        console.log("age answer: " + answer);
        const clientMessage = createClientMessage(answer);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, clientMessage],
        }));

        // askQuestion();
    }

    const askName = () => {
        const nameQuestion = createChatBotMessage(textData.nameQuestion);
        showMessageBar(true);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, nameQuestion],
        }));
    }

    const askPoleQuestion = (question) => { //like age
        const askedQuestion = createChatBotMessage(question);
        // const poleQuestion = createCustomMessage(`handle${question}Answer`, `handle${question}Answer`);
        const poleQuestion = createCustomMessage('ageQuestion', 'ageQuestion');
        showMessageBar(false);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, askedQuestion, poleQuestion],
        }));
    }

    const askOpenQuestion = (question) => {
        const askedQuestion = createChatBotMessage(question);
        showMessageBar(true);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, askedQuestion],
        }));
    }

    const endConversation = () => {
        showMessageBar(false);
        const endMessage = createChatBotMessage(textData.endConversation);
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, endMessage],
        }));
    }

    useEffect(() => {
        const messageBarElement = document.getElementsByClassName('react-chatbot-kit-chat-input-form')[0];
        if (messageBar) {
            messageBarElement.style.display = 'flex';
            document.getElementById('bottom-of-chat').scrollIntoView({ behavior: 'smooth' });
        } else {
            messageBarElement.style.display = 'none';
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
                        handleAgeAnswer,
                        askOpenQuestion,
                        askPoleQuestion,
                        endConversation,
                        setLanguage,
                        textData,
                        direction,
                        textAlign
                    }
                });
            })}
        </div>
    );
};

export default ActionProvider;