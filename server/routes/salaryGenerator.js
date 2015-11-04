


var salary = function(inputInfo){
    var minimum = parseInt(inputInfo.salaryRangeMin);
    var maximum = parseInt(inputInfo.salaryRangeMax);
    var result = (randomNumber(minimum, maximum)).toString();
    return result;
};


function randomNumber(min, max){
    return Math.floor(Math.random()*(1 + max - min) + min);

}

module.exports = salary;