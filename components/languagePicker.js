import React, { useState } from 'react';
import DropDown from './dropdown.js';

let rawLanguages = [
    { "code": "en",
      "language": "English"
    },
    { "code": "he",
      "language": "Hebrew"
    },
    { "code": "ru",
      "language": "Russian"
    },
    { "code": "am",
      "language": "Amharic"
    },
    { "code": "ar",
      "language": "Arabic"
    },
  ];

const primaryLanguages = ["he", "am", "ru"];

function loadLanguageList(primary) {
    let primaryLanguages = [];
    let otherLanguages = [];
    for (let i = 0; i < rawLanguages.length; i++) {
        if (primary.includes(rawLanguages[i]['code'])) {
            primaryLanguages.push(rawLanguages[i]['language']);
        }
        else {
            otherLanguages.push(rawLanguages[i]['language']);
        }
    }
    return {primaryLanguages, otherLanguages};
}

export default function LanguagePicker(props) {
    const [visibility, setVisibility] = useState(true);

    const handleChange = (chosenLanguage) => {
        setVisibility(false);
        props.actions.handleLanguagePicked(chosenLanguage);
    };

    if (!visibility) {
        return null;
    }

    const loadedLangs = loadLanguageList(primaryLanguages);

    return (
        <div>
            <DropDown handleSubmit={handleChange}>{loadedLangs.primaryLanguages}</DropDown>
        </div>
    );
};
