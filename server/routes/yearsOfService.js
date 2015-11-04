/**
 * Created by Danny on 11/3/15.
 */


var yearsService = function(inputInfo){
    var minimum = parseInt(inputInfo.yearsServiceMin);
    var maximum = parseInt(inputInfo.yearsServiceMax);
    var result = (randomNumber(minimum, maximum)).toString();
    return result;
};

function randomNumber(min, max){
    return Math.floor(Math.random()*(1 + max - min) + min);

}

module.exports = yearsService;