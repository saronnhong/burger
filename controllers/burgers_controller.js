var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});
router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, false], function (result) {
            res.json({ id: result.insertId });
        });
});
router.put("/api/burgers/:id", function (req, res) {
    burger.update({devoured: true}, req.params.id, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;