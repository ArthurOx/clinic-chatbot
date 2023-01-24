import React, { Children, useState } from 'react';
import DropDown from './dropdown.js';
import rawLanguages from './data.json'
const primaryLanguageCodes = ["he", "am", "ru", "en", "ar"];

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
    return { primaryLanguages, secondaryLanguages: otherLanguages };
}

export default function SelectLanguage({ actions, setDirection }) {
    const [visibility, setVisibility] = useState(true);

    const handleChange = (chosenLanguage) => {
        if (chosenLanguage.direction === 'rtl') {
            setDirection('rtl');
        }
        setVisibility(false);
        console.log("chosen lang is: " + chosenLanguage);
        actions.handleLanguagePicked(chosenLanguage);
    };

    if (!visibility) {
        return null;
    }

    const loadedLangs = loadLanguageList(primaryLanguageCodes);

    return (
        <div>
            <DropDown handleSubmit={(lang) => handleChange(lang)}>{loadedLangs}</DropDown>
        </div>
    );
};
