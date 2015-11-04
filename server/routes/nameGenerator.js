var femaleFirstName = ["Sarah", "Kelly", "Dana", "Paige", "Heather", "Mindy", "Natalie", "Pui", "Beth"];
var maleFirstName = ["John", "Dick", "Harry", "Larry", "Moe", "Curly"];
var lastName = ["Anderson", "Smith", "Johnson", "Moore", "Campbell"];
var getPersonName = {};

var bigName = function(inputInfo) {
    var result;
    if (inputInfo.genderEmployee == "both") {
        var number = (randomNumber(0, 1));
        if (number == 0) {
            result = genFemale(femaleFirstName);
        } else {
            result = genMale(maleFirstName);
        }

    } else if (inputInfo.genderEmployee == "female") {
        result = genFemale(femaleFirstName);
    } else {
        result = genMale(maleFirstName);
    }
    return result;
};



function genFemale(femaleFirstName){
    getPersonName.firstName = femaleFirstName[randomNumber(0, femaleFirstName.length-1)];
    getPersonName.lastName = lastName[randomNumber(0, lastName.length -1)];
    getPersonName.gender = "female";
    return getPersonName;

}

function genMale(maleFirstName) {
    getPersonName.firstName = maleFirstName[randomNumber(0, maleFirstName.length - 1)];
    getPersonName.lastName = lastName[randomNumber(0, lastName.length -1)];
    getPersonName.gender = "male";
    return getPersonName;
}

function randomNumber(min, max){
    return Math.floor(Math.random()*(1 + max - min) + min);
}

module.exports = bigName;