import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

import MainPage from './pages/MainPage.js';
import Robin from './robin_component/robinMain.js';
import Michael from './michael_component/test.js';

import CategoryArt from './robin_component/categoryArt.js'
// import changeGrad from "./intro_components/changeGrad.jsx"
// import Bootstrap from "bootstrap";


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/robin" exact component={Robin}/>
        <Route path="/test" exact component={Michael}/>
        {/* <Redirect to=""/> */}

        <Route path="/robin/:categoryname" component={CategoryArt}/>
      </Switch>
      {/* <MainPage /> */}
    </Router>

  );
}

export default App;
