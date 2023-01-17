import React, { Children, useState } from 'react';
import Image from 'next/image';
import SelectLanguage from './selectLanguage';
import LogoImage from '../resources/logo.svg';
import LogoTitle from '../resources/logo_title.svg';


export default function FrontWindow(props) {
    return (
        <div>
            <header className='App-header'>
                <div className='logo'>
                    <Image alt='briefcase-logo'
                        src={LogoImage}
                        width={156.31}
                        height={90}>
                    </Image>
                    <Image alt='free-legal-aid'
                        src={LogoTitle}
                        width={366}
                        height={61}>
                    </Image>
                </div>
                <div className='language-select'>
                    <SelectLanguage {...props} />
                </div>
            </header>
        </div>
    );
};