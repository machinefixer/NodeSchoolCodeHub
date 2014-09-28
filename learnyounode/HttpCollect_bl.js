var bl   = require('bl');
var http = require('http');

http.get(process.argv[2], function(res) {
	res.setEncoding("utf8");
	res.pipe(bl(function (err, data) {
		if (err)
			console.error(err);
		console.log(data.toString().length);
		console.log(data.toString());
	}));
});

