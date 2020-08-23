import React, {Component, useState} from 'react';
// import { Storage } from 'aws-amplify';

import S3 from 'react-aws-s3';


function S3Robin(fileName){
    const config = {
        bucketName: "gallery308",
        // dirName: 'robin',
        region: 'us-east-2',
        accessKeyId: 'AKIAJJYQB3MN5JTZZ37Q',
        secretAccessKey: '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'
    }
    
    const ReactS3Client = new S3(config);
    const newFileName = "test.jpg";

    ReactS3Client.uploadFile(fileName, newFileName)
        .then(data => console.log(data))
        .catch(err => console.log(err))

}

export default S3Robin;
// function S3(){
//     state = { fileUrl: '', file: '', filename: ''};

//     handleChange = e => {
//         const file = e.target.files[0]
//         this.setState({
//             fileUrl: URL.createObjectURL(file),
//             file,
//             filename: file.name
//         });
//     }

//     saveFile = () => {
//         Storage.put(this.state.filename, this.state.file)
//             .then(() => {
//                 console.log('successfull saved file!')
//                 this.setState({ fileUrl: '', file: '', filename: ''})
//             })
//             .catch(err => {
//                 console.log('error uploading file!', err)
//             })
//     }

//     return(
//         <h1>hello</h1>
//     );
// }