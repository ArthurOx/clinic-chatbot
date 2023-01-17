import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image';
import TransLogo from '../resources/translation_logo.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';


export default function DropDown({ children, handleSubmit }) {

    return (
        // <select id="dropDownSelector" onChange={handleSubmit}></select>
        <Dropdown onSelect={handleSubmit}>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className='lang-btn'>
                <Image className='custom-lang-btn-image' alt='translations-logo'
                    src={TransLogo}
                    width={42.61}
                    height={32.76}>
                </Image>
            </Dropdown.Toggle>
            <Dropdown.Menu className='custom-ddm'>
                {children.primaryLanguages.map(item => (
                    <Dropdown.Item className='custom-ddm-item' eventKey={item} key={item['code']}>{item['native_name']}</Dropdown.Item>
                ))}
                <Dropdown.Divider />
                {children.secondaryLanguages.map(item => (
                    <Dropdown.Item className='custom-ddm-item' eventKey={item} key={item['code']}>{item['native_name']}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );

    // return (
    //     <label>
    //         <select onChange={handleSubmit}>
    //             {first.map(item => (
    //                 <option key={item} value={item}>{item}</option>
    //             ))}
    //             <option disabled class="seperator">────────</option>
    //             {second.map(item => (
    //                 <option key={item} value={item}>{item}</option>
    //             ))}
    //         </select>
    //     </label>
    // )

    // return (
    //     <label>
    //         <select onChange={handleSubmit}>
    //             <InnerDropDown>{children}</InnerDropDown>
    //             <option disabled class="seperator">────────</option>
    //             <InnerDropDown>{children}</InnerDropDown>
    //         </select>
    //     </label>
    // )
}

