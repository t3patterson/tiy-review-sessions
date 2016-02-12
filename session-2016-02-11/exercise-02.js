//----------------------------
// TASK 2 : Create a function that determines whether a sentence contains the word "donkey"
//         
//         hasWordDonkey("I hear they like donuts in new york")  --> `false`
//         hasWordDonkey("is a donkey a good pet??") --> `true`

//----------------------------
// CONCEPT : Create a function that evaluates a sentence and returns true or false 
//           based on whether a sentence contains a matching string

//           The INPUT will be a string, 
//              we separate it into an array of string-words by space
//              we evaluate each string-word
//              and the OUTPUT will be a true/false value
// --------------------------


// var hasWordDonkey = function(str){
//   //break sentence-string into words

//   var wordArray = str.split(" ");

//   var wordMatched = false

//   for (var i = 0 ; i < wordArray.length ; i = i + 1){

//     if( wordArray[i] === 'donkey'){
//       wordMatched = true
//     }

//   }

//   return wordMatched
// }


// var userQuestion = "is a donkey a good pet??"
// var anotherQuestion = "ralphy really likes ice cream"

// console.log( hasWordDonkey(userQuestion) )
// console.log( hasWordDonkey(anotherQuestion) )

var hasWord = function(str, tgtWord){
  //break sentence-string into words
  
  var wordArray = str.toLowerCase().split(" ");

  var wordMatched = false

  for (var i = 0 ; i < wordArray.length ; i = i + 1){

    if( wordArray[i] === tgtWord.toLowerCase() ){
      wordMatched = true
    }

  }

  return wordMatched
}

var a = hasWord("i'm COLD how random", "cold")
var b = hasWord("blind child and the hot bodies no fingers", 'justin')
var c = hasWord("we are at the iron yard", "Iron")

console.log(a)
console.log(b)
console.log(c)