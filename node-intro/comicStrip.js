var request = require('request')
request.get({
  url: 'http://xkcd.com/'
}, function(err, response, body) {
  console.log('Err', err)
  // console.log("Response", response)
  console.log('Body', body)
})
