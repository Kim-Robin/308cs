import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './MainStyles.css'



// import changeGrad from "./intro_components/changeGrad.jsx"
// import Bootstrap from "bootstrap";



function MainPage() {
  const [initial, changeDegree] = useState(90);
  
  var repeat;
  function repeatHandler(){
     repeat = setInterval(clickHandler, 0.8);
  }
  
  var newDegree = 90;

  // Login click handler
  function clickHandler(){
    newDegree = newDegree + 1;
    changeDegree(newDegree);
    document.getElementById("root").style.background = "linear-gradient(" + newDegree + "deg, #E68745 50%, #6FCBC3 50%)";
    if(newDegree >= 129){
      clearInterval(repeat);
    }else if(newDegree === 127){
      var t = document.getElementById("button-config");
      t.parentNode.removeChild(t);
      var y1 = document.getElementById("button-config-in1");
      y1.style.display = "initial";
      var y2 = document.getElementById("button-config-in2");
      y2.style.display = "initial";
    }
  }
  
  function rClick(){
      document.getElementById("root").style.background = "#E68745"
  }
  function mClick(){
      document.getElementById("root").style.background = "#6FCBC3"
  }

  return (
    <div>
    <div className="row people">
      <div className="feature-box col-lg-6 col-md-6 col-sm-6 appear">
      <Link to="/test" 
        className="btn btn-lg" 
        id="button-config-in1"
        onClick={rClick}
        >Robin Kim</Link>
      </div>
      <div className="feature-box col-lg-6 col-md-6 col-sm-6 appear">
        <Link to="/"
            className="btn btn-lg"  
            id="button-config-in2"
            onClick={mClick} 
            >Michael Sollazzo</Link>
      </div>
    </div>
    <div className="login-button">
     <button type="button" className="btn btn-lg"   id="button-config" onClick={repeatHandler}>login</button>
    </div>
    </div>

  );
}

export default MainPage;
