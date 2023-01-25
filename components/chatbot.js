import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from '../bot/config.js';
import MessageParser from '../bot/MessageParser.js';
import ActionProvider from '../bot/ActionProvider.js';
import Header from '../components/header.js';

export default function ChatbotPage({ props }) {
    return (
        <div>
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
                headerText={<Header />}
                placeholderText=' '
            >
            </Chatbot>
        </div >
    );
}

