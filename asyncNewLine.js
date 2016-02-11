var fs = require("fs");
fs.readFile(process.argv[2], postReadEvent);
 
function postReadEvent(err, data){

	var sum = 0;
	if(err)
		console.log(error);
	else	
	{
		sum = data.toString().split("\n").length - 1;
		console.log(sum);
	}	
}
