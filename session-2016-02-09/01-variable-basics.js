//-------------------------------------------
//Create a variable

var someDataType;  



//-------------------------------------------
//Put values into a variables

var box2 = 67;        

// ...NOTE: variables are DECLARED with `var`
//          and values are assigned from the right side of the `=` 
//          to the named-variable on the left




//-------------------------------------------
//Do some math on the right-side of the `=`

var result = 3 + 8;





//-------------------------------------------
//Use variables to do math...

var value1 = 10;
var value2 = 20;

//.... and store the results in another variable
var calculation = value1 + value2;  
var anotherCalc = value2 - value1 * 3;



//-------------------------------------------
// Other simple DATA TYPES that we can put into variables

var userMessage    = 'hey there how are you'  // string (ie. text)
var currentBalance = 33       // number

var isActive = true     // boolean-true
var isHappy  = false     // boolean-false



//-------------------------------------------
// we use variables because they are PORTABLE 
//    (i.e. their value can be referenced from several places and)

console.log(userMessage)

var newMessage = "What I said was----" + userMessage + "!"
console.log(newMessage)  
  //> 'What I said was--hey there how are you!'



//-------------------------------------------
// we can also OVERWRITE variables

isHappy = true
userMessage = 'this is something else'  
//   NOTE: we don't need to use `var` here because we already DECLARED earlier in our code

console.log(userMessage)
  //> 'this is something else'



//-------------------------------------------
// we can also reference the original value of a variable on right-side of the `=` 
//   and then REASSIGN it on the left

var accountBalance = 100
accountBalance = accountBalance - 20
  // accountBalance is now '80' 
