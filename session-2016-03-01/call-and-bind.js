var greeterObject = {

  name: "Rufus",
  
  greet: function(moreInfo){
    console.log("Well hey there, " + this.name)
    console.log("And also I have this to say:: " + moreInfo )
  }
}

console.log("==================================================")

greeterObject.greet("i love cheerios!")

// ---------------
// ---------------
// ---------------
//  .call()

var userGuy = {
  name: "Eddy",
  city: "Dallas"
}

var visitor = {
  name: "Tammy",
  checkedIn: false,
  room: 201
}

console.log("====================\n\n")
console.log("----------------\n EXAMPLE - .call() : ")
greeterObject.greet.call(userGuy, "i hate cheerios")
console.log('\--')
greeterObject.greet.call(visitor, "i really like donuts")

// ---------------
// ---------------
// ---------------
//  .bind()


var batman = {
  name: null,
  age: 33,
  skills: ['jumping', 'tooling', 'man-of-the-town']
}


var greetSomeTime = greeterObject.greet.call(batman) // so sad... 

var greetWhenISay = greeterObject.greet.bind(batman) 
// .bind() returns the geeterObject.greet function  with `batman` as context
//      --- since the function is returned we can call it later

// a bunch of stuff ahppens ...

batman.name = "Bruce Wayne"
greetWhenISay("you have killed the joker") 
 ///....and here we our bound function execute

