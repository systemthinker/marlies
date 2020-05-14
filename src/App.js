import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
 } from "react-router-dom";
import Home from './components/Home'
import OverOns from './components/OverOns'
import Aanbod from './components/Aanbod'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Maatwerk from './components/Maatwerk'
import Workshops from './components/Workshops'
import Coaching from './components/Coaching'

function App() {


  return (
    <Router>
    <div className="App">
      
       

      <Navbar />
            
          
      

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
        <Route exact path="/Coaching" component={Coaching}>
          </Route>
        <Route exact path="/Maatwerk" component={Maatwerk}>
          </Route>
        <Route exact path="/Workshops" component={Workshops}>
          </Route>
        
             
          <Route path="/:error" component={Home}>
          </Route> 
          

      </Switch>
    </div>
  </Router>
    
  )
}

export default App;
