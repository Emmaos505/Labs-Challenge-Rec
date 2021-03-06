import React from 'react';
import './NavBar.css';




const NavBar = () => {



    return (
        <nav>

            <a href="#">
                <span className="marca">
                    HenryLabs
                    </span>
                <ion-icon name="logo-github"></ion-icon>
            </a>

            <div className="ft-08" >
                <p>FT - 08</p>
            </div>
        </nav>
    )
}

export default NavBar
