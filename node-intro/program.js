//  2 of 13
// var args = process.argv
// var result = 0
// for (var i=2; i<args.length;i++) {
//   result += Number(args[i])
// }
// console.log(result)

// 3 of 13
// var fs = require('fs')
// var fileToRead = fs.readFileSync(process.argv[2].toString(), {encoding: 'utf-8'})
// var newLines = 0
// var newFile = fileToRead.split('\n')
// console.log(newFile.length-1)


// 4 of 13
// var fs = require('fs')
// fs.readFile(process.argv[2], newFile )
// function newFile (err, info) {
//   console.log(info.toString().split('\n').length-1)
// }

// 5 of 13
var fs = require('fs');
var path = require('path');
var file = process.argv[2]
var ext = process.argv[3]
fs.readdir(file, function(err,list) {
  if(err) {
    console.log('oops')
  }
  else {
    for (var i=0;i<list.length;i++) {
      if (path.extname(list[i]) == '.' + ext) {
        console.log(list[i])
      }
    }
  }
})
