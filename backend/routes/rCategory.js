const router = require('express').Router();
const Rcategory = require('../models/rCategory.model.js');

router.route('/').get((req, res)=>{
    Rcategory.find()
        .then(category=> res.json(category))
        .catch(err=>res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const categoryname = req.body.categoryname;

    const newCategory = new Rcategory({categoryname});

    newCategory.save()
        .then(()=>res.json('category created!'))
        .catch(err=>res.status(400).json('Error: ' + err));
})

module.exports = router;