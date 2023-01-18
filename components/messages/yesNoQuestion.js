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
        <div className='yes-no-buttons'>
            <Button className="yes-no-button" onClick={() => handleClick("Yes")} hidden={visibility}>{textData.contactQuestion.yes}</Button>
            <Button className="yes-no-button" onClick={() => handleClick("No")} hidden={visibility}>{textData.contactQuestion.no}</Button>
        </div>
    )
}

