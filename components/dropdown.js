import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import Image from 'next/image';
import TransLogo from '../resources/translation_logo.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';


export default function DropDown({ children, handleSubmit }) {

    return (
        // <select id="dropDownSelector" onChange={handleSubmit}></select>
        <Dropdown>
            <Dropdown.Toggle className='custom-btn custom-lang-btn'>
                <Image className='custom-lang-btn-image'
                    alt='translations-logo'
                    src={TransLogo}
                    width={42.61}
                    height={32.76}>
                </Image>
            </Dropdown.Toggle>
            <Dropdown.Menu className='custom-ddm'>
                {children.primaryLanguages.map(item => (
                    <Dropdown.Item className='custom-ddm-item' eventKey={item} key={item.code} onClick={() => handleSubmit(item)}>{item.native_name}</Dropdown.Item>
                ))}
                <Dropdown.Divider />
                {children.secondaryLanguages.map(item => (
                    <Dropdown.Item className='custom-ddm-item' eventKey={item} key={item.code} onClick={() => handleSubmit(item)}>{item.native_name}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

