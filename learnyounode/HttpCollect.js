var http = require('http');
http.get(process.argv[2], function (response) {
	var output = "";
	response.setEncoding("utf8");
	response.on("data", function (data) {
		output = output + data;
	});
	response.on("end", function () {
		console.log(output.length);
		console.log(output);
	});
	response.on("error", function (error) {
		console.error(error);
	});
});