import React from 'react'
import Icon from '../utils/Icons'

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <Icon link={true} linkTo="/" width="70px" height="70px"/>
            </div>

            <div className="footer_disclaimer">
                Manchester City 2019. All rights reserved
            </div>
        </footer>
    )
}

export default Footer;
