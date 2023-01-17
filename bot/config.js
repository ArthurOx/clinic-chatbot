import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit';
import LanguagePicker from '../components/languagePicker.js';
import Intro from '../components/intro/intro.js';
import ClinicScroller from '../components/horizontalScrolling/clinicScroller.js';
import YesNoQuestion from '../components/messages/yesNoQuestion.js';
// todo: replace with data from supabase
const examples =
    [{
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

const config = {
    initialMessages: [createCustomMessage('pickLanguage', 'languagePicker')],
    widgets: [
        {
            widgetName: 'IntroScreen',
            widgetFunc: (props) => <Intro {...props} />,
        },
    ],
    customMessages: {
        languagePicker: (props) => <LanguagePicker {...props} />,
        intro: (props) => <Intro {...props} />,
        scroller: (props) => <ClinicScroller {...props}>{examples}</ClinicScroller>,
        yesNoQuestion: (props) => <YesNoQuestion {...props} />
    },
    customComponents: {
        botAvatar: () => null,
        userAvatar: () => null
    }
};

export default config;