import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Storage } from 'aws-amplify';

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
                <h1 className="material">{this.category}</h1>
                <div className="row justify-content-center">
                    {this.state.file.map( image =>
                        <h1 className="centerize col col-lg-3 col-md-4 col-sm-6">{image}</h1>
                    )}
                    {/* <img src="https://cnet3.cbsistatic.com/img/-qQkzFVyOPEoBRS7K5kKS0GFDvk=/940x0/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg"></img> */}
                </div>
            </div>
            
        )
    }
}