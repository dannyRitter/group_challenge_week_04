var femaleFirstName = ["Sarah", "Kelly", "Dana", "Paige", "Heather", "Mindy", "Natalie", "Pui", "Beth"];
var maleFirstName = ["John", "Dick", "Harry", "Larry", "Moe", "Curly"];
var lastName = ["Anderson", "Smith", "Johnson", "Moore", "Campbell"];
var getPersonName = "";

function bigName() {
    if (req.body.genderEmployee == "both") {
        if (randomNumber(0, 1) == 0) {
            genFemale(femaleFirstName);
        } else {
            genMale(maleFirstName);
        }

    } else if (req.body.genderEmployee == "female") {
        genFemale(femaleFirstName);
    } else {
        genMale(maleFirstName);
    }
}

function genFemale(femaleFirstName){
    getPersonName = femaleFirstName[randomNumber(0, femaleFirstName.length-1)];
    return getPersonName;

}

function genMale(maleFirstName) {
    getPersonName = maleFirstName[randomNumber(0, maleFirstName.length - 1)];
    return getPersonName;
}

function randomNumber(min, max){
    return Math.floor(Math.random()*(1 + max - min) + min);
}

module.exports = bigName;