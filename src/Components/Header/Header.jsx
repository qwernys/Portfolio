import React from 'react';
import { NavLink, Link } from "react-router-dom";
import './Header.css'

export default function Header() {
    return (
        <nav>
            <div className='div-header'>
                <div className='div-link'>
                    <NavLink to="/">Home</NavLink>
                </div>
                <div className='div-links'>
                    <Link to="https://www.linkedin.com/in/kevin-jonsson-402430227" className='div-link'>Linkedin</Link>
                    <Link to="http://github.com/qwernys" className='div-link'>Github</Link>
                    <NavLink to="/portfolio" className='div-link'>Portfolio</NavLink>
                    <NavLink to="/contact" className='div-link'>Contact</NavLink>
                </div>
            </div>
        </nav>
    )
}