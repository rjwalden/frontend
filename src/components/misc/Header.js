import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1>Rosenblatt AI</h1>
                    <h2>Consulting on all things Artifical Intelligence</h2>
                    <Link to="/">Book a Consultation Now!</Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;