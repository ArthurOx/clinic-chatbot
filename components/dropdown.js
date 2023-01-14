import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';


export default function DropDown({ children, handleSubmit }) {

return (
    // <select id="dropDownSelector" onChange={handleSubmit}></select>
    <Dropdown as={ButtonGroup}>
      <Button variant="success">Select your language</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        {children.map(item => (
            <Dropdown.Item key={item} onClick={handleSubmit}>{item}</Dropdown.Item>
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

