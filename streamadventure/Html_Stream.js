/**
 *These code won't work.
 *The problem requires the entire HTML with 
 *specifid part transformed other than
 *the converted part as output.
 */

/*
var trumpet = require('trumpet');
var through = require('through');
var tru = trumpet();
var thr = through(write);

function write(buf) {
	this.queue(buf.toString().toUpperCase());
}

process.stdin.pipe(tru);
var stream = tru.select('.loud').createStream();

stream.pipe(thr).pipe(stream).pipe(process.stdout); 
*/

/**
 *Better consulting the doc at:
 *https://www.npmjs.org/package/trumpet
 */

var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();

tr.selectAll('.loud', function(elem) {
	var loud = elem.createStream();
	loud.pipe(through(function(buf){
		this.queue(buf.toString().toUpperCase());
	})).pipe(loud);
});

process.stdin.pipe(tr).pipe(process.stdout);
