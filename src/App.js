import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
 } from "react-router-dom";
import Home from './components/Home'


function App() {


  return (
    <Router>
    <div className="App">
      
       <div className="NavLink">
            <NavLink activeClassName="Nav-Active" exact to="/" >Home </NavLink>
          
            <NavLink activeClassName="Nav-Active" exact to="/aanbod">Aanbod </NavLink>
          
            <NavLink activeClassName="Nav-Active" exact to="/overons">Over ons </NavLink>
          
            <NavLink activeClassName="Nav-Active" exact to="/contact">Contact </NavLink>
      </div>
            
          
      

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={Home}>
          
        </Route>
        <Route exact path="/aanbod" component={Aanbod}>
          
        </Route>
        <Route exact path="/overons" component={OverOns}>
          
        </Route>
        <Route exact path="/Contact" component={Contact}>
          </Route>
        
             
          <Route path="/:error" component={Home}>
          </Route> 
          

      </Switch>
    </div>
  </Router>
    
  )
}

export default App;
