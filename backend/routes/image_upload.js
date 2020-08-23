const express = require("express");
const aws = require("aws-sdk");
const dotenv = require('dotenv');
const router = express.Router();


const upload = require('../S3.js');

const singleUpload = upload.single("image");

router.post('/image-upload', function(req, res){
    // dotenv.config();

    // aws.config.update({
    //     region: 'us-east-2',
    //     accessKeyId: process.env.AWSAccessKeyId2,
    //     secretAccessKey: process.env.AWSSecretKey2
    // });

    // const S3_BUCKET = process.env.Bucket;

    // const s3 = new aws.S3();

    // const fileName = req.body.fileName;
    // const fileType = req.body.fileType;

    // const s3Data = {
    //     Bucket: S3_BUCKET,
    //     key: fileName,
    //     Expires: 500,
    //     ContentType: fileType,
    //     ACL: "public-read",
    // }

    // s3.getSignedUrl('putObject', s3Data, (err, data) =>{
    //     if(err){
    //         console.log(err);
    //         res.json({success: false, error: err});
    //     }

    //     const returnData = {
    //         signedRequest: data,
    //         url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    //     };

    //     res.json({
    //         success: true,
    //         data:{returnData}
    //     }); 
    // });

    singleUpload(req, res, function(err){

        if (err) {
            return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
        }
        // console.log(req.file.location);
        console.log(upload);
        return res.json({'imageUrl': req.file.location});
    });
    
});

module.exports = router;