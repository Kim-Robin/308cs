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
                        <button type="button" class="btn btn-primary" onClick={saveData} data-dismiss="modal">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ImageAddPopup(){

    const [add, setAdd] = useState({
        image: null
        });
    const [secret, setSecret] = useState({secretKey: ""})

    function cleanExit(event){
        setSecret ({
            secretKey: ""
        })
        setAdd({
            image: null
        })
        event.preventDefault();
    }
    function inputChange(event){
        const { name, value } = event.target;
        setSecret(prev =>({
            ...prev,
            [name]: value
        }));
    }
    function inputFileChange(event){
        setAdd({
            image: event.target.files[0]
        });
        console.log(event.target.files[0]);
    }
    function saveData(event){
        if (secret.secretKey === "test"){
            // const imageFile ={
            //    image: add.image
            // }
            const data = new FormData();
            if( add.image ){
                data.append('image', add.image, add.image.name);
                axios.post('http://localhost:5100/image/image-upload', data, {
                    headers: {
                     'accept': 'application/json',
                     'Accept-Language': 'en-US,en;q=0.8',
                     'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                    }
                   })
                   .then( ( res ) => {
                        if ( 200 === res.status ) {
                          // If file size is larger than expected.
                            if( res.data.error ) {
                                if ( 'LIMIT_FILE_SIZE' === res.data.error.code ) {
                                    this.ocShowAlert( 'Max size: 2MB', 'red' );
                                } else {
                                    console.log( res.data );
                                    // If not the given file type
                                    this.ocShowAlert( res.data.error, 'red' );
                                }
                            } else {
                                // Success
                                let fileName = res.data;
                                console.log( 'fileName', fileName );
                                // this.ocShowAlert( 'File Uploaded', '#3089cf' );

                                let temp = { 
                                    category: window.location.pathname.substring(7),
                                    file: fileName.imageUrl
                                }
                                console.log(temp.category);
                                console.log(fileName.imageUrl);
                                axios.post('http://localhost:5100/robin/add', temp)
                                    .then(res => console.log(res.data))
                                    .catch(err=> console.log(err))
                            }
                        }
                    })
                    .catch(err => console.log(err))

                
            }
            

            // window.location = '/robin/' + window.location.pathname.substring(7);
        }

        setSecret({
            secretKey: ""
        });

        setAdd({
            image: null
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
                            <input onChange={inputFileChange} type="file"/>
                            <br/>
                            
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onClick={saveData} data-dismiss="modal">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )

    // <div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
    //   <div className="card-header">
    //    <h3 style={{ color: '#555', marginLeft: '12px' }}>Single Image Upload</h3>
    //    <p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px ( Max 2MB )</p>
    //   </div>
    //   <div className="card-body">
    //    <p className="card-text">Please upload an image for your profile</p>
    //    <input type="file" onChange={this.singleFileChangedHandler}/>
    //    <div className="mt-5">
    //     <button className="btn btn-info" onClick={this.singleFileUploadHandler}>Upload!</button>
    //    </div>
    //   </div>
    //  </div>
}


export {CategoryAddPopup, ImageAddPopup};