var express = require("express");
var router = express.Router();

var putData = require("../controllers/dataController").putData;
var getData = require("../controllers/dataController").getData;
var updateData = require("../controllers/dataController").updateData;
var deleteData = require("../controllers/dataController").deleteData;

// this is our get method
// this method fetches all available data in our database
router.get('/getData', getData);

// this is our update method
// this method overwrites existing data in our database
router.post('/updateData', updateData);

// this is our delete method
// this method removes existing data in our database
router.delete('/deleteData', deleteData);

// this is our create methid
// this method adds new data in our database
router.put('/putData', putData);

module.exports = router;
