/**
 * Created by Danny on 11/3/15.
 */
var express = require('express');

var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bigName = require('./nameGenerator.js');
var salary = require('./salaryGenerator.js');
var years = require('./yearsOfService.js');

var employee = {};

mongoose.connect('mongodb://localhost/employeeDb');
mongoose.model('Employee', new Schema({"firstName": String, "lastName": String, "gender": String, "salary": String, "yearsService": String}, {collection: 'employeeDb'}));
var Employee = mongoose.model('Employee');

router.route('/bigData')
    .post(function(req, res){
        var inputInfo = req.body;
        var newEmployee = createEmployee(inputInfo);

        var goDataB = new Employee(newEmployee);
        goDataB.save(function(err, newEmployee) {
            if (err) {
                console.log(err);
            } else {
                res.send(newEmployee);
            }
        });
    });


router.get("/*", function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, '../public', file));
});

function createEmployee (inputInfo){
    employee = {};

    var nameAndGender = bigName(inputInfo);

    employee.firstName = nameAndGender.firstName;
    employee.lastName = nameAndGender.lastName;
    employee.gender = nameAndGender.gender;
    employee.salary = salary(inputInfo);
    employee.yearsService = years(inputInfo);



    return employee;
    //call modules to build the object
}

module.exports = router;