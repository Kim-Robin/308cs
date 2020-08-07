import React, {Component} from 'react';
import './robinMain.css';
import {Link} from 'react-router-dom';
import Randomize from './randomize.js';
import CategoryAddPopup from './popup.js';

export default class robinMain extends Component{


    render(){
        return (
            <div className="rpage">
                <Link to="/" className="btn redirect"><img src="https://img.icons8.com/material-outlined/48/000000/home--v2.png"/></Link>

                <img src="https://img.icons8.com/metro/44/000000/plus-math.png" type="button" data-toggle="modal" data-target="#exampleModal"/>
                <CategoryAddPopup />

                <div className="material">
                    <h1>Robin Kim</h1>
                    <div>
                        I believe life is rich source of inspiration.
                    </div>
                    <div classNameyo="container-fluid ">
                        <Randomize />
                        <div className="row justify-content-center">
                            <div className="rimg col col-lg-3 col-md-4 col-sm-6">sample</div>
                            <div className="rimg col col-lg-3 col-md-4 col-sm-6">sample</div>
                            <div className="rimg col col-lg-3 col-md-4 col-sm-6">sample</div>
                         
                        </div>
                        
                    </div>
                    
                
                <section>
                    <div>
                        hello

                    </div>
                </section>
                </div>
            </div>
        )
    }
}