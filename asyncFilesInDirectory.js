var mymodule = require("./findFilesInDirectory");
mymodule(process.argv[2], process.argv[3], callback);

function callback(err, list){
	if(err)
		console.log(err);
	else
		list.forEach(function(item){
			console.log(item);
		});
}
