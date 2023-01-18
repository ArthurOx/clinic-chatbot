import React, { useState } from 'react';
import Button from '../button';

export default function YesNoQuestion({ children, actions, textData }) {
    const [visibility, setVisibility] = useState(false);

    const handleClick = (answer) => {
        setVisibility(true);
        actions.handleYesNoAnswer(answer);
    }
    // todo replace yes no with translation
    return (
        <div className='yes-no-buttons'>
            <Button className="yes-no-button" handleClick={() => handleClick("Yes")} hidden={visibility}>Yes</Button>
            <Button className="yes-no-button" handleClick={() => handleClick("No")} hidden={visibility}>No</Button>
        </div>
    )
}

