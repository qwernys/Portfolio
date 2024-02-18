import React from 'react';
import { BrowserRouter, NavLink, Link, Routes, Route } from "react-router-dom";
import Home from '../Home/Home.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx'
import Contact from '../Contact/Contact.jsx'


export default function Header() {
    return (
        <BrowserRouter>
            <nav>
                <div>
                    <div>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </div>
                    <div>
                        <Link to="https://www.linkedin.com/in/kevin-jonsson-402430227">Linkedin</Link>
                    </div>
                    <div>
                        <Link to="http://github.com/qwernys">
                            Github
                        </Link>
                    </div>
                    <div>
                        <NavLink to="/portfolio">
                            Portfolio
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Home />}
                />
                <Route
                    exact
                    path="/portfolio"
                    element={<Portfolio />}
                />
                <Route
                    exact
                    path="/contact"
                    element={<Contact />}
                />
            </Routes>
    </BrowserRouter>
        
    )
}