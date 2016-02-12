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
k//
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