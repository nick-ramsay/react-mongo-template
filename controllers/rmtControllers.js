const db = require("../models");

module.exports = {
    createMessage: function (req, res) {
        console.log("Called Create Message controller");
        db.Messages
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    }
};