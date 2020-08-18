import React, {Component, useState} from 'react';
import { Storage } from 'aws-amplify';

function S3(){
    state = { fileUrl: '', file: '', filename: ''};

    handleChange = e => {
        const file = e.target.files[0]
        this.setState({
            fileUrl: URL.createObjectURL(file),
            file,
            filename: file.name
        });
    }

    saveFile = () => {
        Storage.put(this.state.filename, this.state.file)
            .then(() => {
                console.log('successfull saved file!')
                this.setState({ fileUrl: '', file: '', filename: ''})
            })
            .catch(err => {
                console.log('error uploading file!', err)
            })
    }

    return();
}