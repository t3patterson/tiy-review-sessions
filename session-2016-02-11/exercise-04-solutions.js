//----------------------------
// TASK 4 : You are having a party where alcohol will be served
//          and you don't want to let in underage drinkers
//
//          Take an array of objects, test to see which guests are older than 18
//          and convert it into an array of strings with the name only.
//------------------------------------------

var listOfPeople = [
  {
    name: 'Jimmy Drayfus',
    age: 16,
    isFelon: true
  },
  {
    name: 'Sherry Tomkins',
    age: 33,
    isFelon: false
  },
  {
    name: 'Romy Podolski',
    age: 17,
    isFelon: false
  },
  {
    name: 'Buffy Chang',
    age: 25,
    isFelon: true
  },
  {
    name: 'Rufus Johnson',
    age: 38,
    isFelon: false
  },
  {
    name: 'Tammy Barkley',
    age: 20,
    isFelon: false
  },
  {
    name: 'Greta Irishkov',
    age: 22,
    isFelon: false
  }
]

//------------------------------------------------------
// CONCEPT: Iterate over an array of objects, 
//          filter it based on some criteria, 
//          transform it into  simple array 
//          return the new array
//------------------------------------------------------

var partyBouncer = function(arr){

  var namesArray = [];

  for (var i = 0; i < arr.length ; i++){
    if ( arr[i].age > 21 ){
      namesArray.push(arr[i].name)
    }
  }

  return namesArray
}

console.log(partyBouncer(listOfPeople))

//------------------------------------------------------
// TASK 4 REFACTOR:   Iterate over an array of objects, 
//                    filter it based on some criteria, 
//                    transform it into  simple array 
//                    return the new array
//------------------------------------------------------
