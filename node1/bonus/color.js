var request = require('request')
var target = process.argv[2].toLowerCase()
request.get({
  url: 'https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json'
}, function(err, response, body) {
  var list = JSON.parse(body)
  for (var i=0;i<list.length;i++) {
    if (target === list[i].name.toLowerCase()) {
      console.log(list[i].rgb.r + " " + list[i].rgb.g + " " + list[i].rgb.b)
    }
  }
})
