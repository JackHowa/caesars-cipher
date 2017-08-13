function rot13(str) { 
  outputStr = ""; 
  var regex = /[A-Z]/; 
  for (i = 0; i < str.length; i++) {
    // test whether capital letter
    if (regex.test(str[i])) {
      var letterASCII = str.charCodeAt(i);
      var newLetterASCII = letterASCII % 26 + 65; 
      var newLetter = String.fromCharCode(newLetterASCII);
      outputStr += newLetter;
    }
    else {
      outputStr += str[i];
    }
    
  }
  return outputStr;
}

rot13("SERR PBQR PNZC");