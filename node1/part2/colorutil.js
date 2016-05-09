
module.exports = {
  getLuminosity : function(r,b,g) {
    var r = process.argv[2]
    var g = process.argv[3]
    var b = process.argv[4]
    var luminosity = 0.2126*r + 0.7152*g + 0.0722*b
    console.log(luminosity)
  },
  darken: function(r,b,g) {
    var r = process.argv[2]*.8
    var g = process.argv[3]*.8
    var b = process.argv[4]*.8
    console.log(r)
    console.log(g)
    console.log(b)    
  }
}
