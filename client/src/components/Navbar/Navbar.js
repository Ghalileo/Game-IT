import React from 'react';
import './Navbar.css';

const navbar = props => {
    return (
        <header className="navbar">
            <nav className="navbar__navigation">
                <div></div>
                <div className="navbar__logo"><a href="/">THE LOGO</a></div>
                <div className="spacer" />
                <div className="navbar_navigation-items">
                    <ul>
                        <li><a href="/">User</a></li>
                        <li><a href="/">User</a></li>

                    </ul>
                </div>

            </nav>
        </header>
    )
}

export default navbar;