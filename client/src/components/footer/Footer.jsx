import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"
const Footer = () => {
    return (
        
        <div className='footer'>
            <div className='footer-upper'>
                <div>
                    <span>LET'S WORK TOGETHER</span>
                    <br />
                    <Link to="/">CONTACT@NUMBERED.COM</Link>
                </div>
                <div>
                    <p>
                        <p>WORK</p>
                        <p>ABOUT</p>
                        <p>CONTACT</p>
                        <p>JOBS</p>
                    </p>
                    <p>
                        <p>TWITTER</p>
                        <p>INSTAGRAM</p>
                        <p>BEHANCE</p>
                        <p>LINKEDIN</p>
                    </p>
                    <p>
                        <p>NUMBERED STUDIO</p>
                        <p>HERENGRACHT 342</p>
                        <p>1016 CG,AMSTERDAM</p>
                        <p>THE SUNNY NETHERLANDS</p>
                    </p>
                </div>
            </div>

            <div className="main-xt">Numbered</div>
            <div className='footer-bottom'>
                <div>
                    All Rights Reserved &nbsp; &nbsp;&nbsp; <Link to="/legals">Legals</Link>
                </div>
                <div>
                    SUBSCRIBE TO OUR NEWSTELLER
                </div>
            </div>
        </div>
    )
}

export default Footer
