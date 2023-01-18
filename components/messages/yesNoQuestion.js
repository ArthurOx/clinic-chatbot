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
            {/* <Button className="yes-no-button" onClick={() => handleClick("Yes")} hidden={visibility}>Yes</Button>
            <Button className="yes-no-button" onClick={() => handleClick("No")} hidden={visibility}>No</Button> */}
            <Button className="yes-no-button" onClick={() => handleClick("Yes")} hidden={visibility}>Yes</Button>
            <Button className="yes-no-button" onClick={() => handleClick("No")} hidden={visibility}>No</Button>
        </div>
    )
}

