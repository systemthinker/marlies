import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
   } from "react-router-dom";

export default function Navbar(){
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink class="navbar-brand" exact to="/">Home</NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                <li class="nav-item dropdown">
                        <NavLink class="nav-link dropdown-toggle" exact to="/aanbod" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Aanbod
                        </NavLink>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <NavLink class="dropdown-item" exact to="/workshops">Academy Workshops</NavLink>
                        <NavLink class="dropdown-item" exact to="/maatwerk">Maatwerk voor groepen</NavLink>
                        <NavLink class="dropdown-item" exact to="/coaching">Een op een coaching</NavLink>
                        </div>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link" exact to="/aanbod">Over ons</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink class="nav-link" exact to="/aanbod">Contact</NavLink>
                    </li>
                    
                </ul>
            </div>
</nav>
    )
}