
//---------------------------------------
// (1) Function is declared first, and it will take 3 arguments
//      -- `a`,`b`,`c` (AKA paramaters).

function doBackgroundCheck(a, b, c){
  console.log("Candidate name:" );
  console.log( a );
  
  console.log('................');
  
  console.log("How old is the candidate?" );
  console.log( b );
  
  console.log('................');
  
  console.log("Felony On Record? " );
  console.log( c );

  console.log('====================');
  console.log('====================\n');
}

// NOTE: we can also declare a function like so:
// var doBackgroundCheck =  function(){ ... } 


//---------------------------------------
// (2a) function 'invoked' (AKA 'called') and 
//      and our parameter values are passed straight to it
// 
// NOTE: the order that we pass the parameters to the function matters!
//       You'll notice this when you look at how we wrote the function above.
doBackgroundCheck('Travis', 31, false)



//---------------------------------------
// (2b) variables are declared 
var firstName = "Rufus";
var age = 30;
var isFelon = true;

// ... and then we call our function, and pass it those variables
doBackgroundCheck(firstName, age, isFelon);


//---------------------------------------
// (2c) below we've written some new variables 
//     (and we also overwrote the original `firstName` variable)

firstName = "Jules";
var likelyAge = 88;
var commitsSeriousCrimes = true;
// ....and then we've called the function again, passing it those new variables
doBackgroundCheck(firstName, likelyAge, commitsSeriousCrimes);


//---------------------------------------
// (2d) more of the same - invoking our function and passing it variables

//      NOTE: the name used for the variable (`tiyTeacher`, `firstName`, `z`) doesn't matter
//            ... what REALLY matters is the data that it points to so that our function
//                will work/behave as expected
  
  //                     z --> 'Justin'
  //            likelyAge  -->  26 

likelyAge = 26;
var z = 'Justin';

doBackgroundCheck( z, likelyAge, false)


