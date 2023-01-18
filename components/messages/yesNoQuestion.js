import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function YesNoQuestion({ children, actions, textData }) {
    const [visibility, setVisibility] = useState(false);

    const handleClick = (answer) => {
        setVisibility(true);
        actions.handleYesNoAnswer(answer);
    }
    // todo replace yes no with translation
    return (
        <div className='answer-buttons'>
            <Button className="custom-btn" onClick={() => handleClick("Yes")} hidden={visibility}>{textData.contactQuestion.yes}</Button>
            <Button className="custom-btn" onClick={() => handleClick("No")} hidden={visibility}>{textData.contactQuestion.no}</Button>
        </div>
    )
}

