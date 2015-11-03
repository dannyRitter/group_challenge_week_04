/**
 * Created by Danny on 11/3/15.
 */
var express = require('express');

var router = express.Router();
var path = require('path');

router.route('/bigData')
    .post(function(req, res){
        var inputInfo = req.body;
        console.log(inputInfo);
        res.send(req.body);
    });


router.get("/*", function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;