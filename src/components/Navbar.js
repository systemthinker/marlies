import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
    
   
   } from "react-router-dom";
   import Menu from '@material-ui/core/Menu';
   import MenuItem from '@material-ui/core/MenuItem';
   

export default function Navbar(){
    return ( 

        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    
                    <MenuItem class="nav-link" component={NavLink} exact to={'/home'}>Home</MenuItem>
                      
                    </li>
                    <li class="nav-item dropdown">
                        <MenuItem class="nav-link dropdown-toggle " component={NavLink} exact to="/aanbod" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Aanbod
                        </MenuItem>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <MenuItem class="dropdown-item" component={NavLink} exact to="/workshops">Academy Workshops</MenuItem>
                        <MenuItem class="dropdown-item" component={NavLink} exact to="/maatwerk">Maatwerk voor groepen</MenuItem>
                        <MenuItem class="dropdown-item" component={NavLink} exact to="/coaching">Een op een coaching</MenuItem>
                        </div>
                    </li>
                    <li class="nav-item">
                        <MenuItem class="nav-link " component={NavLink} exact to="/overons">Over ons</MenuItem>
                    </li>
                    <li class="nav-item">
                        <MenuItem class="nav-link " component={NavLink} exact to="/contact">Contact</MenuItem>
                    </li>
                    
                </ul>
            </div>
</nav>

    )
}