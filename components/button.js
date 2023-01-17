import React, { useState } from 'react';

export default function Button({ children, className, handleClick, isDisabled }) {

    return (
        <button className={className} onClick={() => handleClick(children)} style={{ marginBottom: "15px" }} disabled={isDisabled}>
            {children}
        </button>
    )
}

