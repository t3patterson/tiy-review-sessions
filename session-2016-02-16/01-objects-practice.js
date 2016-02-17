// EXERCISE 1 (build an array of objects from an array of strings)
// ------------------------
// Convert an array of strings into an array of objects.

// eg. result = [
//  {firstName: 'Chuck', lastName: 'Norris'}
//  ...
// ]
//

// PART 1 

var createNinjaCollection = function(arrayOfStrings){
  
  var outputArray = [] // create a new array

  for (var i = 0; i < arrayOfStrings.length ; i++){
    
    var splitNameArray = arrayOfStrings[i].split(" ")

    var newObject = {}
    newObject.firstName = splitNameArray[0]
    newObject.lastName  = splitNameArray[1]

    outputArray.push(newObject)

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

var ninjaListOfObjects = createNinjaCollection( realNinjas );

console.log( ninjaListOfObjects )


// -----------------------

// PART 2 - REFACTOR - Create a function that takes a string with first and last name separated by a space
//                      and converts it into an object 


//'Chuck Norris'
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

var realNinjas = [
  "Chuck Norris",
  "Jackie Chan",
  "Lucy Liu",
  "Billy Blanks",
  "Michelle Yeoh",
  "Jet Li"
]

var createNinjaCollection_2 = function(arrayOfStrings){
  
  var outputArray = [] 

  for (var i = 0; i < arrayOfStrings.length ; i++){

    var nameObject = makeNameObject( arrayOfStrings[i] )
    outputArray.push(nameObject)
k  }

  return outputArray 
}


createNinjaCollection_2(realNinjas)


//    INPUT             OUTPUT
//    ------            -------
// ("Chuck Norris") => {
//                      firstName: 'Chuck',
//                      lastName: 'Norris'
//                     }



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




// console.assert(typeof ninjaListOfObjects[0] === "object")
// console.assert(ninjaListOfObjects[0].firstName === "Chuck")
// console.assert(ninjaListOfObjects[1].lastName === "Chan")








