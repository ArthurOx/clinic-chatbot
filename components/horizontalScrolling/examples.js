import React from 'react';

export default function Example({ children, exampleText }) {
    return (
        <div>
            <div className='example-text'>{exampleText}</div>
            <div className='example'>{children[0]}</div>
            <div className='example'>{children[1]}</div>
            <div className='example'>{children[2]}</div>
        </div>
    );

}