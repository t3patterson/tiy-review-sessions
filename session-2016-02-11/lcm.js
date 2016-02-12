// find least common multiple

function findLCM (num1, num2){

  var maxPossibleLCM = num1 * num2;

  if (num1 > num2){

    var bigNum = num1, 
        smallNum = num2;

  } else {

    var bigNum = num2, 
        smallNum = num1;

  }
  // get the big nums
  bigNumMultsList = [];

  for (var i = 1; i <= smallNum; i++){
    bigNumMultsList.push(i * bigNum)
  }

  //get test small nums to bigNums list

  for (var i = 0 ; i < bigNumMultsList.length ; i++){

    if (bigNumMultsList[i] % smallNum === 0){
      console.log(bigNumMultsList[i])
      return bigNumMultsList[i]

    }
  }
  
}

findLCM(6,10);