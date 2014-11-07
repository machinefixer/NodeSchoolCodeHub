var _ = require("lodash");

var worker = function(item) {
    var result = {hot: [], warm: []};

     _.forEach(item, function(tempList, city) {
        if (_.every(tempList, function(num) {
            return num > 19;
        })) {
            result.hot.push(city);
        }else if(_.some(tempList, function(num) {
            return num > 19;
        })){
            result.warm.push(city);
        }
    });

    return result;
};

module.exports = worker;
