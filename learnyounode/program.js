var mymodule = require('./mymodule.js');
var callback = function(err, list) {
	if (err)
		console.log(err);
	list.forEach(function(item) {
		console.log(item);
	});
};

mymodule(process.argv[2], process.argv[3], callback);

