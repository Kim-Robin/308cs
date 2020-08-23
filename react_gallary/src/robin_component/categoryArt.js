import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {ImageAddPopup} from './popup.js';
// import S3Robin from './S3.js';

export default class randomize extends Component{

    category = this.props.location.pathname.substring(7);

    constructor(props){
        super(props);

        this.state ={
            category : this.category,
            like: [],
            date: [],
            file: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5100/robin/'+ this.category)
        .then(res=>{
            this.setState({
                like: res.data.map(value => value.like),
                date:res.data.map(value => value.date),
                file:res.data.map(value => value.file)
            })
        })

        // console.log(this.state.file);
    }


    
    render(){
        // this.state.date.sort()
        console.log();

        this.state.date.map(date =>
            console.log(date));
        

        return(
            <div className="rpage">
                <Link to="/robin/" className="redirect">
                    <img src="https://img.icons8.com/metro/50/000000/  left.png"/>
                </Link>
                <img src="https://img.icons8.com/metro/44/000000/plus-math.png" type="button" data-toggle="modal" data-target="#exampleModal"/>
                <ImageAddPopup />

                <h1 className="material">{this.category}</h1>
                <div className="row justify-content-center">
                    {this.state.file.map( image =>
                        <img className="artimg centerize col col-lg-4 col-md-6 col-sm-8" src={image}></img>
                    )}
                    {/* <img className="artimg" src="https://gallery308.s3.us-east-2.amazonaws.com/FB%402x-1598129723441.png"></img> */}
                    {/* <h1 className="centerize col col-lg-4 col-md-4 col-sm-6">{image}</h1> */}
                </div>
            </div>
            
        )
    }
}