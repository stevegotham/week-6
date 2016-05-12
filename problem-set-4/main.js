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

function longestWord (str) {
  var words = str.split(' ');
  var longWord = '';
  var letterCount = 0;
  for (var i=0; i<words.length; i++) {
    words[i] = {
      word: words[i],
      letters: words[i].length
    }
    for (var ii=0;ii<words[i].word.length; ii++) {
      if (words[i].word[ii] === '.' ||
          words[i].word[ii] === ',' ||
          words[i].word[ii] === '?' ||
          words[i].word[ii] === '!' ||
          words[i].word[ii] === "'" ||
          words[i].word[ii] === "-") {
          words[i].letters -= 1
      }
    }
    if (words[i].letters > letterCount) {
      letterCount = words[i].letters
      longWord = words[i].word
    }
  }
  return longWord;
}

function longestWord2 (str) {
  var words = str.split(' ');
  var longWord = '';
  var letterCount = 0;
  for (var i=0; i<words.length; i++) {
    words[i] = {
      word: words[i],
      letters: words[i].length
    }
  }
  for (var word in words) {
    if (words[word].word.indexOf('.') >= 0 ||
        words[word].word.indexOf(',') >= 0 ||
        words[word].word.indexOf('!') >= 0 ||
        words[word].word.indexOf('?') >= 0 ||
        words[word].word.indexOf('-') >= 0 ||
        words[word].word.indexOf("'") >= 0) {
        words[word].letters -= 1;
    }
    if (words[word].letters > letterCount) {
      letterCount = words[word].letters
      longWord = words[word].word
    }
  }
  return longWord
}
