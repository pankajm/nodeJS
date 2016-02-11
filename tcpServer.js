var net = require('net');
var customeDate = "";

function zeroFill(i) {
      return (i < 10 ? '0' : '') + i;
}

var server = net.createServer(function(socket){
	// make custom date and write it in socket;
	var date = new Date();
	customDate = date.getFullYear() + "-" + zeroFill(date.getMonth() + 1) + "-" + zeroFill(date.getDate()) + " " + zeroFill(date.getHours()) + ":" + zeroFill(date.getMinutes());
	socket.end(customDate);
});
server.listen(process.argv[2]);
