//------------------------------------------------------------------
// TASK 1 : Build a function that counts the instances of the letter 'x' in a sentence
//          "xavier's favorite dinosaur is the t-rex"
//          "my a.p. history teacher's name was sexy rexy" 
//           and returns the count
//            
//------------------------------------------------------------------
// CONCEPT: Build a function that counts the instances of a character in a string.
//          
//          The INPUT is a string, we evaluate each character with a for-loop, 
//            and the OUTPUT is a number.
//
//------------------------------------------------------------------

var countInstancesOfX = function(sentence){

  var characterArray = sentence.split('');  //

  var  xCount = 0;

  for (var i = 0 ; i < characterArray.length ; i = i + 1){
      
      if ( characterArray[i] === 'x'  ){
          
          xCount = xCount + 1;

      }
  }

  return xCount
}

console.log( countInstancesOfX("xavier's favorite dinosaur is the t-rex") );

/// TASK 1 - REFACTORED
//    - make the function count the instance of any character
//    - make the character case-insensitive

var countChar = function( sentence, chr ){
  var smallChr = chr.toLowerCase();
  var characterArray = sentence.toLowerCase().split('');  //

  var  xCount = 0;

  for (var i = 0 ; i < characterArray.length ; i = i + 1){
      
      if ( characterArray[i] === smallChr ){
          
          xCount = xCount + 1;

      }
  }

  return xCount
}

var pCount = countChar('Pizza is so good. Peter Pan is a pooopy pants', 'p');
console.log(pCount)

