import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit';
import Intro from '../components/intro/intro.js';
import ClinicScroller from '../components/horizontalScrolling/clinicScroller.js';
import YesNoQuestion from '../components/messages/yesNoQuestion.js';
import FrontWindow from '../components/frontWindow.js';
import AgeQuestion from '../components/messages/ageQuestion.js';
import RtlMessage from '../components/messages/rtlMessage.js';

const config = {
    initialMessages: [createCustomMessage('pickLanguage', 'frontWindow')],
    widgets: [
        {
            widgetName: 'IntroScreen',
            widgetFunc: (props) => <Intro {...props} />,
        },
    ],
    customMessages: {
        frontWindow: (props) => <FrontWindow {...props} />,
        intro: (props) => <Intro {...props} textData={props.actions.textData} />,
        scroller: (props) => <ClinicScroller {...props} textData={props.actions.textData}></ClinicScroller>,
        yesNoQuestion: (props) => <YesNoQuestion {...props} textData={props.actions.textData} />,
        ageQuestion: (props) => <AgeQuestion {...props} textData={props.actions.textData} />,
        rtlQuestion: (props) => <RtlMessage {...props} />,
    },
    customComponents: {
        botAvatar: () => null,
        userAvatar: () => null
    }
};

export default config;