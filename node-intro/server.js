var http = require('http')

var server = http.createServer(
  function(request, response) { // (req,res)
    response.writeHead(200, {'Content-Type': 'text/html',})
    response.end('<h1> Wow!!! This is our first server!</h1>')

})

server.listen(process.env.PORT || 2323)
// localhost:2323
