import React, { Children, useState } from 'react';
import DropDown from './dropdown.js';
import rawLanguages from './no_missing_langs.json'
// import rawLanguages from './data.json'
const primaryLanguageCodes = ["he", "am", "ru", "en", "ar"];

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
    return { primaryLanguages, secondaryLanguages: otherLanguages };
}

export default function SelectLanguage(props) {
    const [visibility, setVisibility] = useState(true);

    const handleChange = (chosenLanguage) => {
        setVisibility(false);
        console.log("chosen lang is: " + chosenLanguage);
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
