var someObject = {
  name: 'Arjun',
  children: ['Sally', 'Byron'],
  age: 56,
  isMarried: false,
  netWorth: 43000
}

for ( var key in someObject ) {
  console.log(key)
  console.log( someObject[key] )
  console.log('---------')
}