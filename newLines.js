var fileName = process.argv[2];
var fs = require("fs");
var buffer = fs.readFileSync(fileName);
var stringBuffer = buffer.toString();
var newLineArray = stringBuffer.split("\n");
console.log(newLineArray.length - 1);
