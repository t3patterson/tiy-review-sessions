// TASK 5 
//   Iterate over an object and print each property & value to the console
//
//

var someObject = {
  name: 'Arjun',
  children: ['Sally', 'Byron'],
  age: 56,
  isMarried: false,
  netWorth: 43000
}

//  ( var «property» in «object» ){...
for ( var key in someObject ) {
  console.log(key)
  console.log( someObject[key] )
  console.log('---------')
}