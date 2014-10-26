/* These code won't work.
The problem requires the entire HTML with 
specifid part transformed as output
other than the converted part.
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

var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();
 
tr.selectAll('.loud', function(elem) {
    var stream = elem.createStream();
    stream.pipe(through(function(buf) {
        this.queue(buf.toString().toUpperCase());
    }))
    .pipe(stream);
});
 
process.stdin.pipe(tr).pipe(process.stdout);
