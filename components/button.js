import React, { useState } from 'react';

export default function Button({ children, handleClick }) {

    return (
        <button onClick={() => handleClick(children)}>
            {children}
        </button>
    )
}

