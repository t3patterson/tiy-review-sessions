//----------------------------
// TASK 2 : Create a function that determines whether a sentence contains the word "donkey"
//         
//         hasWordDonkey("I hear they like donuts in new york")  --> `true
//         hasWordDonkey("is a donkey a good pet??") --> `false`

//----------------------------
// CONCEPT : Create a function that evaluates a sentence and returns true or false 
//           based on whether a sentence contains a matching string

//           The INPUT will be a string, 
//              we separate it into an array of string-words by space
//              we evaluate each string-word
//              and the OUTPUT will be a true/false value
// --------------------------

var hasWordDonkey = function(str){
  var wordsArray = str.toLowerCase().split(' '); // split to an array on space 
  
  // The if-else evaluation w/in our loop may modify this value
  var tgtWordFound = false;

  for (var i = 0 ; i < wordsArray.length ; i = i + 1 ){
    
    if (wordsArray[i] === 'donkey'){
      tgtWordFound = true
    }

  }

  return tgtWordFound
}

var example1 = hasWordDonkey("I hear they like donuts in new york");
var example2 = hasWordDonkey("is a donkey a good pet??");

console.log(example1);
console.log(example2);

// TASK 2 - REFACTORING : 
//   - make the function test for any word
//   - make sure that upper case / lower case doesn't matter

var hasTargetWord = function(tgtWord, str){
  var wordsArray = str.toLowerCase().split(' '); // split to an array on space 
  
  var tgtWordFound = false;

  for (var i = 0 ; i < wordsArray.length ; i = i + 1 ){
    
    if (wordsArray[i] === tgtWord.toLowerCase() ){
      tgtWordFound = true
    }

  }

  return tgtWordFound
}

var result2 = hasTargetWord("food", "ummmm wow ok that was very strange");
var result3 = hasTargetWord("shellby", "call the file shellby pleez");
var result4 = hasTargetWord("roast", "i like to ROAST chickens with my ronco showtime. set it and forget it");

console.log("-----------------")
console.log(result2);
console.log(result3);
console.log(result4);