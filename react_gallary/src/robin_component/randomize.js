import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import axios from 'axios';



export default class randomize extends Component{
    
    constructor(props){
        super(props);

        this.animation = this.animation.bind(this);
        this.coloring = this.coloring.bind(this);

        this.state = { 
            categoryname : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5100/rcategory/')
            .then(res=>{
                this.setState({
                    categoryname: res.data.map(category => category.categoryname),
                });
            })
    }
    coloring(){
         var colorState = Math.floor(Math.random() * 6); 

         switch(colorState) {
            case 0:
                return "category-color1"
                // #FCF4D9
                break;
            case 1:
                return "category-color2"
                // #8ED2C9
                break;
            case 2:
                return "category-color3"
                // #FFB85F
                break;
            case 3:
                return "category-color4"
                // #F2C249
                break;
            case 4:
                return "category-color5"
                // #E64A45
                break;
            case 5:
                return "category-color6"
                // #A29B4C
                break;
            default:
              // code block
          }
    }

    animation(){
        var animationState = Math.floor(Math.random() * 6); 
        // console.log(animationState);
         switch(animationState) {
            case 0:
                return "w3-animate-opacity";
                break;
            case 1:
                return "w3-animate-top";
                break;
            case 2:
                return "w3-animate-bottom";
                break;
            case 3:
                return "w3-animate-left";
                break;
            case 4:
                return "w3-animate-right";
                break;
            case 5:
                return "w3-animate-zoom";
                break;
            default:
              // code block
          }
    }

    render(){
        return(
            <div className="row justify-content-center">
                {this.state.categoryname.map
                    (categoryname =>
                        <Link to={"/robin/" + categoryname} className={"centerize rimg col col-lg-3 col-md-4 col-sm-6 btn " + this.animation() + " " + this.coloring()}>
                            <h1>
                                {categoryname}
                            </h1>
                        </Link>
                    )
                }
            </div>
        )
    }
}