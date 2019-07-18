var express = require("express");
var router = express.Router();

var addNewContact = require("../controllers/bookmalController").addNewContact;
var getContacts = require("../controllers/bookmalController").getContacts;
var getContactWithId = require("../controllers/bookmalController").getContactWithId;
var updateContact = require("../controllers/bookmalController").updateContact;
var deleteContact = require("../controllers/bookmalController").deleteContact;

router
    .get('/contact', (req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, getContacts)
    .post('/contact', addNewContact)

    .get('/contact/:contactId', getContactWithId)
    .put('/contact/:contactId', updateContact)
    .delete('/contact/:contactId', deleteContact);


// get
// router.get("/", (req, res, next) => {
//     console.log("req.body", req.body);
//     res.json({
//         ok: true,
//         data: "Index get"
//     });
// });
//
// // post
// router.post("/", (req, res, next) => {
//     console.log("req.body", req.body);
//     var username = req.body.username;
//     var password = req.body.password;
//
//     var user = {
//         username: username,
//         password: password
//     };
//
//     res.json({
//         ok: true,
//         userInfo: user
//     });
// });

module.exports = router;
