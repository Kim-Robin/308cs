const router = require('express').Router();

const Robin = require('../models/robin.model.js');

router.route('/:category').get((req,res) =>{
    Robin.find({category: req.params.category})
        .then(arts => res.json(arts))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    const category = req.body.category;
    const like = 0;
    const date = Date.parse(new Date());
    const file = req.body.file;

    const newArt = new Robin({
        category,
        like,
        date,
        file
    });

    newArt.save()
        .then(()=> res.json('Art added!'))
        .catch(err=>res.status(400).json('Error: ' + err));

})

router.route('/delete').delete((req,res) => {

})

module.exports = router;