import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export default function AgeQuestion({ children, actions, textData }) {
    const [visibility, setVisibility] = useState(false);

    // todo replace yes no with translation
    return (
        <div className='age-question-dropdown'>
            <Dropdown onSelect={actions.handleAgeAnswer}>
                <Dropdown.Toggle></Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey={0}>0</Dropdown.Item>
                    <Dropdown.Item eventKey={1}>1</Dropdown.Item>
                    <Dropdown.Item eventKey={2}>2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

