var fs = require("fs");
var path = require("path");
module.exports = function(directoryName, ext, callback){

	var fileList = [];
	fs.readdir(directoryName, function(err, list){

		if(err)
			callback(err);
		else{
        		for(var i = 0; i < list.length; i++){
                		if(path.extname(list[i]) == "."+ext)
                		{
                        		fileList.push(list[i]);
                		}
        		}
			callback(null, fileList);
		}
	});
}
