// We use this to render a generic message to the UI
import React, { useState } from 'react';
// import Button from "../button";
import { Button } from 'react-bootstrap';

// Usually when waiting for some data to load
export default function Intro(props) {

    return (
        <div className="row">
            <div className="item">
                <h1>עזרה משפטית בחינם</h1>
            </div>
            <Button onClick={props.actions.handleStartConversation}>בואו נתחיל!</Button>
        </div>
    )
}
