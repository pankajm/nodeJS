var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){

	response.writeHead(200, {'content-type':'text/plain'})
	//var file = fs.createReadStream(process.argv[3]);
	//file.pipe(response);
	response.end(fs.readFileSync(process.argv[3]));
});

server.listen(process.argv[2]);
