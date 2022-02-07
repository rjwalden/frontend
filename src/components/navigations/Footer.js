import React from 'react'
import { Link } from "react-router-dom"

import './Footer.css'

const Footer = () => {
    return (
        <footer >
            <div className="footer">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/rosenblatt">Who's Rosenblatt</Link></li>
                </ul>

                <ul className="social">
                    <li>
                        <a href="https://www.linkedin.com/in/ryan-walden-28771a8b/"><i className="fa fa-linkedin"></i></a>
                    </li>
                </ul>

                <p>&copy; Rosenblatt LLC. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;