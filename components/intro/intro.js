// We use this to render a generic message to the UI
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import ScrollLogo from '../../resources/scroll.svg';

// Usually when waiting for some data to load
export default function Intro({ actions, textData }) {

    return (
        <div className='intro-page'>
            <div className='intro-item'>
                <div className='intro-item-title'>
                    <h1 className='intro-title'>{textData.intro.introTitle}</h1>
                </div>
                <div className='intro-item-content'>
                    <p className='intro-content'>{textData.intro.introText}</p>
                </div>
            </div>
            <Image className='custom-scroll-logo-image'
                alt='scroll-logo'
                src={ScrollLogo}
                width={105.91}
                height={108.98}>
            </Image>
            <Button className='get-started-btn' onClick={actions.handleStartConversation}>{textData.intro.introButton}</Button>
        </div>
    )
}
