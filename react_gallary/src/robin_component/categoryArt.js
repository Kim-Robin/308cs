import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class randomize extends Component{

    category = this.props.location.pathname.substring(7);


    
    render(){

        console.log();
        

        return(
            <div className="rpage">
            <Link to="/robin/" className="redirect">
                <img src="https://img.icons8.com/metro/50/000000/  left.png"/>
            </Link>
                <h1 className="material">{this.category}</h1>
            </div>
            
        )
    }
}