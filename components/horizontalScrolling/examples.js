import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function Example({ children, exampleText }) {
    return (
        <div>
            <div className='example-text'>{exampleText}</div>
            <Accordion>
                {children.map((child, index) => {
                    return (
                        <Accordion.Item eventKey={index} class='clickable-som text-in-example'>
                            <Accordion.Header>{child.header}</Accordion.Header>
                            <Accordion.Body>
                                {child.description}
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                }
                )}
            </Accordion>
        </div>
    );
}