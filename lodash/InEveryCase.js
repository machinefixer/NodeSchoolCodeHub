var _ = require('lodash');

var worker = function(cities) {
    return _.forEach(cities, function(value, key) {
        if (value.population > 1) {
            cities[key].size = 'big';
        } else if (value.population > 0.5) {
            cities[key].size = 'med';
        } else {
            cities[key].size = 'small';
        }
    });
};

module.exports = worker;
