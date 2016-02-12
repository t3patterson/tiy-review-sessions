//-------------------------------------------
// TASK 3 : Create a function that takes a string and the censors the bad words: 

// badwords:  'heck','darn','crud', 'poop' 
//
// return:
// "what the heck is that guy's problem. whatever he's full of poop"  
//    -->  "what the $!^# is that guy problem"

// "gosh mom i'm tired of all your crud."
//    --> "gosh mom i'm tired of all your $!^#"

// "what the heck are you doing with your darn life"
//    --> "what the $!^# are you doing with your $!^# life"

// -------------------------------------------
// CONCEPT: Create a function that takes a string as INPUT 
//          and returns a new string as OUTPUT.
//
//          We must separate the initial string into an array of string-words.
//
//          Then we must iterate over the array of string-words and determine 
//          if each string-word exists on a separate list^^.

//            ^^ To complete this, we must create a HELPER-FUNCTION 
//               that evaluates where the initial string will be modified.
//
//               This helper function will take a string and an array of strings as INPUT,
//               it will iterate over the array and test for a match
//               and it will return a TRUE or FALSE value          

//          We then concatenate either the original string-word or modified string-word 
//          to a new string and return the new string after our for-loop.
//------------------------------------------

var existsOnList = function (str, wordListArray){
  var listHasWord = false 

  for (var i = 0 ; i < wordListArray.length ;i++){
    
    if (wordListArray[i].toLowerCase() === str.toLowerCase() ){
      listHasWord = true;
    }

  }

  return listHasWord
}

var someArrayOfWords = ['poop', 'crud', 'darn', 'heck']


// console.log( existsOnList('poop', someArrayOfWords) )
// console.log( existsOnList('crud', someArrayOfWords) )
// console.log( existsOnList('wow', someArrayOfWords) )
// console.log( existsOnList('okay', someArrayOfWords) )
// console.log( existsOnList('heck', someArrayOfWords) )


var forbiddenWordsList = ['poop', 'crud', 'darn', 'heck']

var censorBadWords = function (sentenceStr, badWordsList){
  var wordsList = sentenceStr.split(" ");

  var modifiedSentence = ''

  for (var i = 0 ; i < wordsList.length ; i = i + 1){
    if ( existsOnList(wordsList[i], badWordsList)  ){
      modifiedSentence += '$!^#';
    } else {
      modifiedSentence += wordsList[i];
    }

    modifiedSentence += " "
  }

  return modifiedSentence;
}

var cleanMessage1 = censorBadWords( "gosh mom i'm tired of all your crud", forbiddenWordsList )
var cleanMessage2 = censorBadWords( "what the heck are you doing with your darn life", forbiddenWordsList )
var cleanMessage3 = censorBadWords( "i love u baby shammpoo", forbiddenWordsList )

console.log(cleanMessage1)
console.log(cleanMessage2)
console.log(cleanMessage3)

