import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';


const routes = (
  //Wrap application in a Router tag to implementing route
  <Router>
      <div>
        {/*Each route will have a coresponding components which are imported*/ }
          <Route exact path = "/" component = {Home}/>
      </div>
  </Router>
)

//React takes in route object and renders by route
ReactDOM.render(routes, document.getElementById('root'));
