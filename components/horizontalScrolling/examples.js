import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function Example({ children, exampleText }) {
    return (
        <div>
            <div className='example-text'>{exampleText}</div>
            <Accordion>
                <Accordion.Item eventKey="0" class='clickable-som text-in-example'>
                    <Accordion.Header>{children[0]}</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" class='clickable-som text-in-example'>
                    <Accordion.Header>{children[1]}</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" class='clickable-som text-in-example'>
                    <Accordion.Header>{children[2]}</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );

}