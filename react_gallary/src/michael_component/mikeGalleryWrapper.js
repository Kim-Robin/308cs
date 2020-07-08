import React, {Component} from 'react';
import FilterBar from './filterBar';
import './test.css';

export default class Test extends Component{
    render(){
        return (
            <div className="mpage">
                
                    <h1>Mike's Gallery</h1>
                    
                    <div class="container-fluid ">
                        <FilterBar />
                        <div className="row justify-content-center">
                            <div className="mimg col col-lg-3 col-md-4 col-sm-6">sample</div>
                            <div className="mimg col col-lg-3 col-md-4 col-sm-6">sample</div>
                            <div className="mimg col col-lg-3 col-md-4 col-sm-6">sample</div>
                            <div className="mimg col col-lg-3 col-md-4 col-sm-6">sample</div>
                            <div className="mimg col col-lg-3 col-md-4 col-sm-6">sample</div>
                            <div className="mimg col col-lg-3 col-md-4 col-sm-6">sample</div>
                            <div className="mimg col col-lg-3 col-md-4 col-sm-6">sample</div>
                            <div className="mimg col col-lg-3 col-md-4 col-sm-6">sample</div>
                            <div className="mimg col col-lg-3 col-md-4 col-sm-6">sample</div>
                        </div>
                    </div>
                
                
            </div>
        )
    }
}