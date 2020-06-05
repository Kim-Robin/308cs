import React from 'react';
import changeGrad from "./intro_components/changeGrad.jsx"
import Bootstrap from "bootstrap";

// const hello = React.useState();

function App() {
  


  return (
    <div>
    <div className="row people">
      <div className="feature-box col-lg-6 col-md-6 col-sm-6 appear">
        <button type="button" className="btn btn-lg" id="button-config-in1">Robin Kim</button>
      </div>
      <div className="feature-box col-lg-6 col-md-6 col-sm-6 appear">
        <button type="button" className="btn btn-lg"  id="button-config-in2">Michael Sollazzo</button>
      </div>
    </div>
    <div className="login-button">
     <button type="button" className="btn btn-lg"   id="button-config">login</button>
    </div>
    </div>

  );
}

export default App;
