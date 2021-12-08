import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="/"><span className="bgcolor">Hasibul Hasan's Portfolio</span> </a>
                    <button class="navbar-toggler sm-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;