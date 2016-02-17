// PART 2 - REFACTOR  
//   Create a function that takes an array of strings with first and last name 
//   separated by a space and converts it into an array of objects --

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


var createNinjaCollection = function(arrayOfStrings){
  
  // Declare 'builder' array
  var outputArray = [] 

  for (var i = 0; i < arrayOfStrings.length ; i++){

    // ---- Critical Step: Split string, create object, push object to builder array ----
    //
    // ("Chuck Norris") => {
    //                      firstName: 'Chuck',
    //                      lastName: 'Norris'
    //                     }
    
    // Create 'builder' object
    var newObject = {}
  
    //Split the string into an array (splitNameArray) -- 
    //   index-value @ 0 will equal the first ame
    //   index-value @ 1 will equal the last name 
    var splitNameArray = arrayOfStrings[i].split(" ")

    //Set `firstName` property and value on builder object
    newObject.firstName = splitNameArray[0] 
    newObject.lastName  = splitNameArray[1]
    

    //Push `builder` object to builder array (originally declared outside the for-loop)
    outputArray.push(newObject)
    //------------------------------------------------------
  
  }

  //return the 'builder' array
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

var ninjaListOfObjects = createNinjaCollection( realNinjas );

console.log( ninjaListOfObjects )

