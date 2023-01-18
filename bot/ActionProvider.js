import { createCustomMessage, createClientMessage } from 'react-chatbot-kit';
import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll'
import { getData } from "../supabase/supabaseApi";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const [messageBar, showMessageBar] = useState(false);
    const [language, setLanguage] = useState('');
    const [textData, setTextData] = useState({});

    const handleLanguagePicked = (chosenLanguage) => {
        setLanguage(chosenLanguage);
        // const data = getData(chosenLanguage);
        const dataInLanguage = {
            clinicCards: [{
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
            }],
            intro: {
                introTitle: "introTitle",
                introText: "introText",
                introButton: "introButton"
            },
            exampleText: "exampleText",
            continueText: "continueText",
            contactQuestion: {
                question: "contactQuestion",
                yes: "yes",
                no: "no"
            },
            phoneQuestion: "Phone?",
            ageQuestion: "Age?",
            helpQuestion: "What can we help you with?",
            endConversation: "endConversation"
        };
        setTextData(dataInLanguage);
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

    const handleClickedContinue = (event) => {
        event.currentTarget.disabled = true;
        const botMessage = createChatBotMessage(textData.contactQuestion.question);
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
        const nameQuestion = createChatBotMessage('What is your name?');
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
                        handleAgeAnswer,
                        askOpenQuestion,
                        askPoleQuestion,
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