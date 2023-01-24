import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export default function Example({ children, exampleText, slideStyle, contentStyle }) {
    return (
        <div>
            <div className='example-text'>{exampleText}</div>
            <Accordion>
                {children.map((child, index) => {
                    return (
                        <Accordion.Item eventKey={index} className='clickable-som text-in-example' key={index}>
                            <Accordion.Header style={contentStyle()}>{child.header}</Accordion.Header>
                            <Accordion.Body style={slideStyle()}>
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