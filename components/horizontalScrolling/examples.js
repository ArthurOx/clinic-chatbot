import React from 'react';

export default function Example({ children, exampleText }) {
    return (
        <div>
            <div className='example-text'>{exampleText}</div>
            <div className='example clickable-default clickable-som text-in-example'>{children[0]}</div>
            <div className='example clickable-default clickable-som text-in-example'>{children[1]}</div>
            <div className='example clickable-default clickable-som text-in-example'>{children[2]}</div>
        </div>
    );

}