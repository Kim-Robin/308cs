import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

import MainPage from './pages/MainPage.js'
import Robin from './robin_component/robinMain.js';
import Michael from './michael_component/mikeGalleryWrapper.js'

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
      </Switch>
      {/* <MainPage /> */}
    </Router>

  );
}

export default App;
