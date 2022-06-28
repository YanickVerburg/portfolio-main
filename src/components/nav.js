import React from 'react';
import '../styles/style.css';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {    
    
    render() {
        return (
            <header style={{ height: "100%" }}>
                <div className="nav-bar" id="nav">
                    <a href="/" className="active"><Link to="/">Home</Link></a>
                    <a href="/portfolio" className="portfolio-anchor"><Link to="/portfolio">Portfolio</Link></a>
                    <a href="/contact" className="contact-anchor"><Link to="/contact">Contact</Link></a>
                    <a href="/about" className="about-anchor"><Link to="/about">About</Link></a>
                </div>
            </header>
        );
    }
}

