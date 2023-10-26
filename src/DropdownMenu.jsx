import React, { useState, useRef} from 'react';
import { Link } from 'react-scroll';
import './DropdownMenu.css';

function DropdownMenu({}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown-container">
            <input type="checkbox" id="nav-control" className="nav-control" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
            <label htmlFor="nav-control" className="toggle-button" >
                <div className="wolverine">
                    <div className="claws"></div> <span>menu</span>
                </div>
            </label>
            <ul className="navigation">
                <li><Link to ="hero" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to ="About" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
            </ul>
        </div>
    );
}

export default DropdownMenu;