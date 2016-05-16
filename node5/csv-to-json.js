var fs     = require('fs');
var input  = process.argv[2];
var output = process.argv[3];

fs.readFile(input, 'utf-8', function(err, data) {
  var file = data.split('\n');
  var myJson = [];
  if (file[file.length-1] == '') {
    file.pop();
  }
  var keys = file[0].split(',');
  for (var i=1; i<file.length; i++) {
    var myObj = {};
    var currentLine = file[i].split(',');
    for (var ii=0; ii<keys.length;ii++) {
      myObj[keys[ii]] = currentLine[ii];
    }
    myJson.push(myObj);
  }
  fs.writeFile(output,JSON.stringify(myJson));
});
