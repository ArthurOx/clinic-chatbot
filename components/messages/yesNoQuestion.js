import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function YesNoQuestion({ children, actions, textData }) {
    const [visibility, setVisibility] = useState(false);

    const handleClick = (answer, localizedAnswer) => {
        setVisibility(true);
        actions.handleYesNoAnswer(answer, localizedAnswer);
    }
    // todo replace yes no with translation
    return (
        <div className='yes-no-buttons'>
            <Button className="clickable-default no-button" onClick={() => handleClick("No", textData.contactQuestion.no)} hidden={visibility}>{textData.contactQuestion.no}</Button>
            <Button className="clickable-default yes-button" onClick={() => handleClick("Yes", textData.contactQuestion.yes)} hidden={visibility}>{textData.contactQuestion.yes}</Button>
        </div>
    )
}

