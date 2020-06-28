import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

import MainPage from './pages/MainPage.js'
import Test from './robin_component/test.js';

// import changeGrad from "./intro_components/changeGrad.jsx"
// import Bootstrap from "bootstrap";



function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/test" exact component={Test}/>
        {/* <Redirect to=""/> */}
      </Switch>
      {/* <MainPage /> */}
    </Router>

  );
}

export default App;
