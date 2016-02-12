//------------------------------------------------------------------
// TASK 1 : Build a function that counts the instances of the letter 'x' in a sentence
//          "xavier's favorite dinosaur is the t-rex" and returns the count
//            
//------------------------------------------------------------------
// CONCEPT: Build a function that counts the instances of a character in a string.
//          
//          The INPUT is a string, we evaluate each character with a for-loop, 
//            and the OUTPUT is a number.
//
//------------------------------------------------------------------

var countLetterX = function(str){
  // Make our string into an array of single-characters
  var lettersArray = str.split('');

  // NOTE: here we declare something BEFORE the for-loop 
  //       that will then be evaluated/modified within
  var letterCount = 0; 

  // for-loop iterates over each letter
  for (var i = 0 ; i < lettersArray.length ; i++){
        
      if (  lettersArray[i] === 'x' ){
      // ...and here we modify the variable we had declared/created initially 
      //     outside this for-loop
      letterCount = letterCount + 1;  
      }
  
  }

  return letterCount;
}

var fn_output = countLetterX("i had a teacher named sexy rexy");
console.log(fn_output)



// TASK 1 - REFACTORING: 
// - Improve the function to count and return the instances of ANY letter
// - Make sure that the function counts both upper and lower cased instances

var countLetterInstance = function(character, str){
  var lettersArray = str.toLowerCase().split('');
  var letterCount = 0; 

  for (var i = 0 ; i < lettersArray.length ; i++){
        
      if (  lettersArray[i] === character.toLowerCase() ){
        letterCount = letterCount + 1;  
      }
  
  }

  return letterCount;
}

var fn_output2 = countLetterInstance("f", "There are a lot of F-bombs in the movie Friday. Not for the faint of heart")
console.log(fn_output2)
