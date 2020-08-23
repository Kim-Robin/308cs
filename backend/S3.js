const express = require('express');
const aws = require("aws-sdk");
const dotenv = require('dotenv');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { response } = require('express');
const path = require( 'path' );
const url = require('url');

// aws configuation for S3

dotenv.config();

aws.config.update({
    region: 'us-east-2',
    accessKeyId: process.env.AWSAccessKeyId2,
    secretAccessKey: process.env.AWSSecretKey2
});

const S3_BUCKET = process.env.Bucket;

const s3 = new aws.S3();

const fileFilter = (req,file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    }else{
        cb(new Error('Invalid Mime Type, only JPEG and PNG'), false);
    }
}

const upload = multer({
    fileFilter: fileFilter,
    storage: multerS3({
        s3: s3,
        bucket: S3_BUCKET,
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        // metadata: function(req, file, cb){
        //     cb(null, {
        //         fileName: file.fieldname
        //         // fileName: "Testing_ meta_data!"
        //     });
        // },
        key: function (req, file, cb) {
            cb(null, path.basename( file.originalname, path.extname( file.originalname ) ) + '-' + Date.now() + path.extname( file.originalname ) )
        }
        
    })
})

// const profileImgUpload = multer({
//     storage: multerS3({
//      s3: s3,
//      bucket: 'onclick',
//      acl: 'public-read',
     
//     }),
//     limits:{ fileSize: 2000000 }, // In bytes: 2000000 bytes = 2 MB
//     fileFilter: function( req, file, cb ){
//      checkFileType( file, cb );
//     }
//    }).single('profileImage');

module.exports = upload;
