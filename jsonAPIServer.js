var http = require('http');
var url = require('url');

var date = {

	hour:"",
	minute:"",
	second:""

};

var epoch = {

	unixtime:""

}

var server = http.createServer(function(request, response){

	response.writeHead(200, {'Content-type': 'application/json'});
	var requestData = url.parse(request.url, true);
	var dateTime = requestData.query.iso;
	if(requestData.pathname == "/api/parsetime"){
		var isoTime = new Date(dateTime);	
		date.hour = isoTime.getHours();
		date.minute = isoTime.getMinutes();
		date.second = isoTime.getSeconds();
		response.end(JSON.stringify(date));
	}
	else if(requestData.pathname == "/api/unixtime"){
		epoch.unixtime = Date.parse(dateTime);
		response.end(JSON.stringify(epoch));
	}
});
server.listen(process.argv[2]);
