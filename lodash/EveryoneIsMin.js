var _ = require("lodash");

var worker = function(item) {
    var result = {hot: [], warm: []};

     _.forEach(item, function(index, value) { //in here, index refers to an entire object
        if (_.every(index, function(num) {
            return num > 19;
        })) {
            result.hot.push(value);
        }else if(_.some(index, function(num) {
            return num > 19;
        })){
            result.warm.push(value);
        }
    });

    return result;
};

module.exports = worker;
