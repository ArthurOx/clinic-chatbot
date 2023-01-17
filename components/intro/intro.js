// We use this to render a generic message to the UI
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import ScrollLogo from '../../resources/scroll.svg';

// Usually when waiting for some data to load
export default function Intro(props) {

    return (
        <div className='intro-page'>
            <div className='intro-item'>
                <div className='intro-item-title'>
                    <h1 className='intro-title'><b>עזרה משפטית בחינם</b></h1>
                </div>
                <div className='intro-item-content'>
                    <p className='intro-content'>נמצא כאן כל המידע הרלוונטי להגשת פנייה במספר שלבים קצרים</p>
                </div>
            </div>
            <Image className='custom-scroll-logo-image' 
                alt='scroll-logo'
                src={ScrollLogo}
                width={105.91}
                height={108.98}>
            </Image>
            <Button className='custom_btn custom-get-started-btn' onClick={props.actions.handleStartConversation}>בואו נתחיל!</Button>
        </div>
    )
}
