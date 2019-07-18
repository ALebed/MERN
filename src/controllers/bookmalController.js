var mongoose = require("mongoose");
var ContactSchema = require("../models/bookmalModel").ContactSchema;

const Contact = mongoose.model('Contact', ContactSchema);

const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    })
};

const getContacts = (req, res) => {
    console.log('in', res);
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    });
};

const getContactWithId = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    })
};

const updateContact = (req, res) => {
    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    });
};

const deleteContact = (req, res) => {
    Contact.remove({ _id: req.params.contactId }, (err) => {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: 'Successfully deleted contact' })
        }
    })
};

module.exports = {
    addNewContact,
    getContacts,
    getContactWithId,
    updateContact,
    deleteContact
};
