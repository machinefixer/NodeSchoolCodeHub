var through = require('through');
var http = require('http');
var tr = through(write, end);

var server = http.createServer(function (req, res) {
	if (req.method === 'POST') {
		req.pipe(tr).pipe(res);
	}
});

server.listen(process.argv[2]);

function write(buf) {
	console.log(buf.toString().toUpperCase());
}

function end() {
	this.queue(null);
}