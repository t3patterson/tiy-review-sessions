
// Part 6

// The code below doesn't work. Can you fix it?

var makeItTom = function(object) {
  for (var prop in object) {
    if (prop === 'name') object.prop = 'Tom'
  }
  return object
}

var sampleObject = {
  mass: '5.972 × 10^24 kg',
  age: '4.543 billion years',
  name: 'Earth'
}


// VVV caution: hints below VVV

console.assert(planetTom['name'] === 'Tom')
console.assert(planetTom.prop === undefined)
console.assert(planetTom['prop'] === undefined)

// What did you learn about the difference between
// bracket syntax and dot syntax for object attributes?


// Part 7
// -----------
// Write a function where() that takes two inputs, a list of objects and 
// a properties object. It should return a new list containing only those
// objects that meet the key-value conditions.
// -----------


var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]

var sh8spr = where(plays, {author: "Shakespeare"})
console.assert(sh8spr instanceof Array)
console.assert(sh8spr.length === 5)
console.assert(sh8spr[0].title === "Cymbeline")

sh8spr = where(plays, {author: "Shakespeare", year: 1611})
console.assert(sh8spr.length === 0)

sh8spr = where(plays, {author: "Shakespeare", year: 1623})
console.assert(sh8spr.length === 2)

var midcentury = where(plays, {year: 1949})
console.assert(midcentury.length === 2)


// Part 8

// Create an object that has a name attribute and a method called personalize. 
// personalize should take a function as input. when personalize is called, 
// an introductory string should be inserted before the input function's
// return value. Use the example in the console.assert to understand
// exactly how you should write the method. Including the period! 

var politeObject = {
    name: "Frank"
}

var helloWorld = function() {
    return "hello world"
}

var personalizedResult = politeObject.personalize(helloWorld)
console.assert(personalizedResult === "Hi, my name is Frank, and the \
    result is hello world.")