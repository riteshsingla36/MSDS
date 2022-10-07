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
                    <div className='footer-two'>
                        <Link to="/">CONTACT@NUMBERED.COM</Link>
                    </div>
                </div>
                <div className='footer-four'>
                    <div>
                        <div>
                            <Link>WORK</Link>
                        </div>
                        <div>
                            <Link>ABOUT</Link>
                        </div>
                        <div>
                            <Link>CONTACT</Link>
                        </div>
                        <div>
                            <Link>JOBS</Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link>TWITTER</Link>
                        </div>
                        <div>
                            <Link>INSTAGRAM</Link>
                        </div>
                        <div>
                            <Link>BEHANCE</Link>
                        </div>
                        <div>
                            <Link>LINKEDIN</Link>
                        </div>
                    </div>
                    <div>
                        <p>NUMBERED STUDIO</p>
                        <p>HERENGRACHT 342</p>
                        <p>1016 CG,AMSTERDAM</p>
                        <p>THE SUNNY NETHERLANDS</p>
                    </div>
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
