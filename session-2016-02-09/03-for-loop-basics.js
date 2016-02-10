//-------------------------------
// (1) Basic For-Loop

var arrayOfMessages = ['hi guys', 'whats up?', 'hey there', 'yo', 'greetings']

// starting point    // stop when false             // do this after each iteration
//-------------        --------------               ------------------------
// start value       // iterate up to this value    // increment start value

for (var index = 0  ; index < arrayOfMessages.length ;   index = index + 1 ){

    console.log(arrayOfMessages[i])  // access each value in the array 
                                     //   on each iteration 
}



//-------------------------------
// (2) Making a for-loop as part of a function


function sumTotaler(arrayInput){

  total = 0

  //here's our for-loop! 
  for (var index = 0  ; index < arrayInput.length ;   index = index + 1 ){

      total = total + arrayInput[index]
        // NOTE that it is adding each array-element's value to the `total`
        //      on each iteration

  }

  return total 

}

arrayOfValues = [10,20,30,29,44]
var result = sumTotaler(arrayOfValues) 
  //call `sumTotaler` function here and pass in `arrayOfValues` ... returns the `total`
console.log(result)

// we could pass in an array to `sumTotaler` directly:
console.log( sumTotaler([7,22,1,91,44]) );