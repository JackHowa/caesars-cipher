function rot13(str) { 
  outputStr = ""; 
  for (i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      outputStr += str[i];
    }
    else {
      var letterASCII = str.charCodeAt(i);
      var newLetterASCII = letterASCII % 26 + 65; 
      var newLetter = String.fromCharCode(newLetterASCII);
      outputStr += newLetter;
    }
    
  }
  return outputStr;
}