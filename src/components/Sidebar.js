import React from 'react'

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mightycoder.svg'
import resume from '../assets/resume.pdf'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:codesumax@gmail.com")
    }
    return (
        <div className="sidebar">
            <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Mateshwari <span> Verma</span> </div>
            <div className="sidebar__item sidebar__title">Software Developer</div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="my-2">
                <a href=""><img src={facebook} alt="facebook" className="sidebar__icon sidebar__social-icons mr-3" /></a>
                <a href=""><img src={instagram} alt="instagram" className="sidebar__icon sidebar__social-icons mr-3" /></a>
                <a href=""><img src={github} alt="github" className="sidebar__icon sidebar__social-icons" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__location mt-3">
                    <img src={pin} alt="location" className="sidebar__icon mr-1" />
                     Balrampur, UP, India
                </div>
                <div className="sidebar__item mt-3">mateshwari33@gmail.com</div>
                <div className="sidebar__item ">8853952715</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>Email Me</div>
        </div>
    )
}

export default Sidebar;