import React, { Children, useState } from 'react';
import DropDown from './dropdown.js';
const primaryLanguageCodes = ["he", "am", "ru"];

let rawLanguages = [
    { "code": "en",
      "language": "English",
      "nativeId": "English",
      "LTR": true
    },
    { "code": "he",
      "language": "Hebrew",
      "nativeId": "עברית",
      "LTR": false
    },
    { "code": "ru",
      "language": "Russian",
      "nativeId": "Русский",
      "LTR": true
    },
    { "code": "am",
      "language": "Amharic",
      "nativeId": "አማርኛ",
      "LTR": true
    },
    { "code": "ar",
      "language": "Arabic",
      "nativeId": "عربى",
      "LTR": false
    },
  ];

console.log("raw languages are: " + rawLanguages);

function loadLanguageList(primary) {
    let primaryLanguages = [];
    let otherLanguages = [];
    for (let i = 0; i < rawLanguages.length; i++) {
        if (primary.includes(rawLanguages[i]['code'])) {
            primaryLanguages.push(rawLanguages[i]);
        }
        else {
            otherLanguages.push(rawLanguages[i]);
        }
    }
    return {primaryLanguages, secondaryLanguages: otherLanguages};
}

export default function LanguagePicker(props) {
    const [visibility, setVisibility] = useState(true);

    const handleChange = (chosenLanguage) => {
        setVisibility(false);
        console.log("chosen lang is: " + chosenLanguage)
        props.actions.handleLanguagePicked(chosenLanguage);
    };

    if (!visibility) {
        return null;
    }

    const loadedLangs = loadLanguageList(primaryLanguageCodes);

    return (
        <div>
            <DropDown handleSubmit={handleChange}>{loadedLangs}</DropDown>
        </div>
    );
};
