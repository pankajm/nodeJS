var http = require('http');
var totalData = "";
http.get(process.argv[2], function(response){

	response.on("data", function(data){
		totalData = totalData + data.toString();
	});

	response.on('end', function(data){
		console.log(totalData.length);
		console.log(totalData);
	});
});
