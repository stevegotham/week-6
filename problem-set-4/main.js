function addNumbers (str) {
  var sum = 0;
  var num;
  for (var i=0;i<str.length;i++) {
    if(!isNaN(str[i]) && str[i] !== " ") {
      if(!isNaN(str[i+1]) && str[i+1] !== " ") {
        num = Number(str[i] + str[i+1])
        i+=1
      }
      else {
        num = Number(str[i])
      }
      sum += num
    }
  }
  return sum;
}
