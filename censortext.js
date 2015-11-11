/*
“To create a Node.js Packaged Module, you need to create the functionality in
JavaScript, define the package using a package.json file, and then either
publish it to the registry or package it for local use.”
*/
var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];

function censor(inStr) {
  for (idx in censoredWords){
    inStr = inStr.replace(censoredWords[idx], "****");
  }
  for (idx in customCensoredWords) {
    inStr = inStr.replace(customCensoredWords[idx], "****");
  }
  return inStr;
}

function addCensoredWord(word){
  customCensoredWords.push(word);
}
function getCensoredWords(){
  return censoredWords.concat(customCensoredWords);
}

/*
“these lines  export the functions censor(), addCensoredWord(), and
getCensoredWords(). exports.censor is required for Node.js applications
using this module to have access to the censor() function as well as
the other two functions.”
*/
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
