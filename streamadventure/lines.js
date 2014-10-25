var split = require('split');
var through = require('through');
var count = 1;
var tr = through(write, end);

function write(line) {
	if (count % 2 === 0) {
		console.log(line.toString().toUpperCase());
	}else{
		console.log(line.toString().toLowerCase());
	}
	count++;
}

function end() {
	this.queue(null);
}

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);