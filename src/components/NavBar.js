import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation(); 
    const activeClass = "nav-link active";
    const inactiveClass = "nav-link"; 
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src="https://www.svgrepo.com/show/243084/news-journal.svg" height="30px" alt="NewsOne Logo" className="navbar-logo me-2 mx-3" />
                    NewsOne
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mx-5 mb-lg-0">
                        <li className="nav-item"><Link className={location.pathname === "/" ? activeClass : inactiveClass} aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><Link className={location.pathname === "/business" ? activeClass : inactiveClass} to="/business">Business</Link></li>
                        <li className="nav-item"><Link className={location.pathname === "/entertainment" ? activeClass : inactiveClass} to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className={location.pathname === "/general" ? activeClass : inactiveClass} to="/general">General</Link></li>
                        <li className="nav-item"><Link className={location.pathname === "/health" ? activeClass : inactiveClass} to="/health">Health</Link></li>
                        <li className="nav-item"><Link className={location.pathname === "/science" ? activeClass : inactiveClass} to="/science">Science</Link></li>
                        <li className="nav-item"><Link className={location.pathname === "/sports" ? activeClass : inactiveClass} to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className={location.pathname === "/technology" ? activeClass : inactiveClass} to="/technology">Technology</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
