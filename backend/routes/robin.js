const router = require('express').Router();

const Robin = require('../models/robin.model.js');

router.route('/').get((req,res) =>{
    Robin.find()
        .then(arts => res.json(arts))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    const category = req.body.categody;
    const like = 0;
    const date = Date.parse(req.body.date);
    const file = req.body.file;

    const newArt = new Robin({
        category,
        like,
        date,
        file
    });

    newArt.save()
        .then()

})

router.route('/delete').delete()

module.exports = router;