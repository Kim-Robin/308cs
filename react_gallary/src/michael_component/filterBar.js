import React, {useState} from 'react';
import './filterBar.css'

 function FilterBar() {

  const [filter, setFilter] = useState(false);
  const [buttonColor, setColor] = useState({
    hiking: "",
    summer: "",
    winter: "",
    family: ""
  })



 const handleFilterClick = (event) =>   {
   

    if(event.target.textContent === "Hiking"){
      setColor({hiking: 'green'})
    }
    if(event.target.textContent === "Winter"){
      setColor({winter: 'blue'})
    }
    if(event.target.textContent === "Summer"){
      setColor({summer: 'red'})
    }
    if(event.target.textContent === "Family"){
      setColor({family: 'orange'})
    }
    
  

    
  }
  


  
  return (
    <div className="row test2">
      <div className="col test">   
        <span className="badge badge-pill badge-secondary"
              onClick={handleFilterClick} style={{backgroundColor: buttonColor.hiking}}>Hiking</span>     
        <span className="badge badge-pill badge-secondary"
              onClick={handleFilterClick} style={{backgroundColor: buttonColor.summer}}>Summer</span>
        <span className="badge badge-pill badge-secondary"
              onClick={handleFilterClick} style={{backgroundColor: buttonColor.winter}}>Winter</span>
        <span className="badge badge-pill badge-secondary"
              onClick={handleFilterClick} style={{backgroundColor: buttonColor.family}}>Family</span>
      </div>
      <div className="col">

      </div>
    </div>
  )
}

export default FilterBar;