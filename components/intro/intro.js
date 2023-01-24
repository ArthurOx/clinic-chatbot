// We use this to render a generic message to the UI
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Image from 'next/image';
import ScrollLogo from '../../resources/scroll.svg';

// Usually when waiting for some data to load
export default function Intro({ actions, textData }) {
    const textDirection = actions.direction;
    const introStyle = () => {
        if (textDirection == 'rtl') {
            return {
                'marginRight': '35px',
                'textAlign': 'right',
                'direction': 'rtl'
            }
        } else {
            return {
                'marginLeft': '35px',
                'textAlign': 'left',
                'direction': 'ltr'
            }
        }
    }
    return (
        <div className='intro-page'>
            <div className='intro-item'>
                <div className='intro-item-title'>
                    <h1 className='intro-title' style={introStyle()}>{textData.intro.introTitle}</h1>
                </div>
                <div className='intro-item-content' style={introStyle()}>
                    <p className='intro-content'>{textData.intro.introText}</p>
                </div>
                <Image className='custom-scroll-logo-image'
                    alt='scroll-logo'
                    src={ScrollLogo}
                    width={105.91}
                    height={108.98}>
                </Image>
            </div>


            <Button className='custom-btn custom-intro-btn'
                onClick={(e) => actions.handleStartConversation(e)}
                style={{ direction: textDirection }}>{textData.intro.introButton}</Button>
        </div>
    )
}
