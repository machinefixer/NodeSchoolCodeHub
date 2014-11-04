var _ = require('lodash');

var worker = function(items) {
    return result = _.sortBy(items, 'quantity').reverse();
}

module.exports = worker;
