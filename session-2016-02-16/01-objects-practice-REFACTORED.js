// PART 2 - REFACTOR  

//   ORIGINAL PROBLEM: 
//     Create a function that takes an array of strings with first and last name 
//     separated by a space and converts it into an array of objects --

    // INPUT:  Array of Strings: ['Chuck Norris', 'Jackie Chan']

    // OUTPUT:  Array of Objects
    // [
    //   {
    //     firstName: 'Chuck',
    //     lastName: 'Norris'
    //   },
    //   {
    //     firstName: 'Jackie',
    //     lastName: 'Chan'
    //   }
    //   // ....
    // ]


//   REFACTOR: 
//     Create a helper method that will take a string and make the object
//     (see line 62)
//
//         INPUT             OUTPUT
//         ------            -------
//      ("Chuck Norris") => {
//                           firstName: 'Chuck',
//                           lastName: 'Norris'
//                          }


var makeNameObject = function(str){

  if (typeof str !== 'string') {
    console.log('PLEaSE GivVE ME a StRING!')
    return false
  }

  var splitNameArray = str.split(' '); // => ['Chuck', 'Norris']
  
  var objectOutput = {};
  objectOutput.firstName = splitNameArray[0];
  objectOutput.lastName  = splitNameArray[1];

  return objectOutput;
}



var createNinjaCollection = function(arrayOfStrings){
  
  var outputArray = [] 

  for (var i = 0; i < arrayOfStrings.length ; i++){

    // REFACTOR: Create makeNameObject-function to make code neater and 
    //          help us'decompose' the problem 
    
    var nameObject = makeNameObject( arrayOfStrings[i] )
    outputArray.push(nameObject)
  
  }

  return outputArray 
}


var realNinjas = [
  "Chuck Norris",
  "Jackie Chan",
  "Lucy Liu",
  "Billy Blanks",
  "Michelle Yeoh",
  "Jet Li"
]


createNinjaCollection(realNinjas)


console.assert(typeof ninjaListOfObjects[0] === "object")
console.assert(ninjaListOfObjects[0].firstName === "Chuck")
console.assert(ninjaListOfObjects[1].lastName === "Chan")








