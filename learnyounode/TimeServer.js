var port = process.argv[2];
var net = require('net');
var server = net.createServer(function (socket) {
	var date = new Date();
	var year = date.getFullYear();
	var m = date.getMonth() + 1;
	var month = (m < 10) ? "0" + m : m;
	var d = date.getDate();
	var day = (d < 10) ? "0" + d : d;
	var h = date.getHours();
	var hour = (h < 10) ? "0" + h : h;
	var min = date.getMinutes();
	var minute = (min < 10) ? "0" + min : min;

	var data = year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n";
	socket.end(data);

});
server.listen(port);

// Official Solution
var net = require('net')

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  var d = new Date()
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))

