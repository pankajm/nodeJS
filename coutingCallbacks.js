var http = require('http');
var count = 3;
var callData = ["","",""];

function getServerData(index){
	http.get(process.argv[2+index], function(response){
	
		response.on('data', function(data){
			callData[index] = callData[index] + data.toString();
		});
	
		response.on('end', function(data){
			count--;
			if(count == 0)
				printData();
		})
	});
};

for(var i = 0; i < 3; i++)
	getServerData(i);

function printData(){
	callData.forEach(function(val){
		console.log(val);
	})
}
