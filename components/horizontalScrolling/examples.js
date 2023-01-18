import React from 'react';

export default function Example({ children, exampleText }) {
    return (
        <div>
            <div className='example-text'>{exampleText}</div>
            <div className='example example-text'>{children[0]}</div>
            <div className='example example-text'>{children[1]}</div>
            <div className='example example-text'>{children[2]}</div>
        </div>
    );

}