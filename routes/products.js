var express = require('express');
var mongojs = require('mongojs');

var router = express.Router();
var db = mongojs('hanbit', ['products']);

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.products.find(function(err, data) {
        if (err) {
            res.send([]);
            return;
        }

        res.send(data);
    });
});

module.exports = router;
