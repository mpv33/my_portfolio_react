import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [active, setActive] = useState('')

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if (currentURL.endsWith('/'))
            setActive('About');
        else if (currentURL.endsWith('/projects'))
            setActive('Projects')
        else if (currentURL.endsWith('/resume'))
            setActive('Resume')
        else if (currentURL.endsWith('/certification'))
            setActive('Certification')

    }, [active])

    return (
        <div className="navbar">
            <div className="navbar__active">
                {active}
            </div>

            <div className="navbar__items">
            
                    <Link to="/">
                        <div className="navbar__item"   onClick={() => setActive('About')}>About </div>
                    </Link>
                
            
                    <Link to="/resume">
                        <div className="navbar__item" onClick={() => setActive('Resume')}>Resume</div>
                   </Link> 
                
            
                    <Link to="/projects">
                        <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div>
                    </Link>

                    <Link to="/certification">
                        <div className="navbar__item" onClick={() => setActive('Certification')}>Certification</div>
                    </Link>
                
            </div>

        </div>
    );
};

export default Navbar;