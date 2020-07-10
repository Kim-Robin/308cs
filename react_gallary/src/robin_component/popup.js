import React, {Component, useState} from 'react';
import axios from 'axios';

function CategoryAddPopup(){

     const [add, setAdd] = useState({
        secretKey: "",
        category: ""
        });

    function inputChange(event){
        const { name, value } = event.target;
        setAdd(prev =>({
            ...prev,
            [name]: value
        }));
    }
    function cleanExit(event){
        setAdd({
            secretKey: "",
            category: ""
        })
        event.preventDefault();
    }

    function saveData(event){
        if (add.secretKey === "test"){
            const category ={
               categoryname: add.category
            }
            axios.post('http://localhost:5100/rcategory/add', category)
                .then(res => console.log(res.data))

            window.location = '/robin';
        }

        setAdd({
            secretKey: "",
            category: ""
        })
    }

    return(
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New Category</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={cleanExit}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <li><input onChange={inputChange} type="password" name="secretKey" value={add.secretKey} placeholder="Secret Key"/></li>
                            <li><input onChange={inputChange}  type="text" name="category" value={add.category} placeholder="Category"/></li>
                        </form>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onClick={saveData}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CategoryAddPopup;