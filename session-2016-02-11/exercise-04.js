//----------------------------
// TASK 4 : You are having a party where alcohol will be served
//          and you don't want to let in underage drinkers
//
//          Take an array of objects, test to see which guests are older than 21
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

// ? take array of objects, convert it into list of objects ?

function canParty(arrOfObjects) {

  var newArray = []

  for ( var i = 0 ; i < arrOfObjects.length ; i++){

    if( arrOfObjects[i].age >= 21 ){

      newArray.push(arrOfObjects[i].name)
      
    }

  }

  return newArray

}

var partyList = canParty(listOfPeople);

console.log(partyList)