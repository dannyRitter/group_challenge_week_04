/**
 * Created by Danny on 11/3/15.
 */
var express = require('express');
var app = express();
var path = require('path');


app.set('port', process.env.PORT || 5000);

app.post("/bigData", function(req,res){
    res.send("Hellooooooo!");
});

app.get("/*", function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get("port"), function(){
    console.log(app.get("port"));
});