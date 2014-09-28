module.exports = function (dirname, exfltr, callback) {
	var fs   = require('fs');
	var path = require('path');
	var output = [];

	fs.readdir(dirname, function(error, list) {
		if (error) {
			return callback(error);
		}
		else {
			list.forEach(function(item) {
				if (path.extname(item) == ('.' + exfltr)) {
					output.push(item);
				}
			});
			return callback(null, output);
		}
	});
};
