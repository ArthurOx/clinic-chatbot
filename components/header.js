// shows title.svg from the resources folder
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderImage from '../resources/title.svg';

export default function Header() {
    return (
        <div className='.react-chatbot-kit-chat-header'>
            <Link href='https://clinic-chatbot.vercel.app/'>
            {/* todo: change the link back to the vercel version after im done :) */}
            {/* <Link href='http://localhost:3000/'> */}
                <Image className='header-image'
                    alt="תרגומידע"
                    src={HeaderImage}
                    width={322.55}
                    height={63}>
                </Image>
            </Link>
            {/* <hr className='header-separator'></hr> */}
        </div>
    )
}
