// PART 2 - REFACTORED

var buttonEl = document.querySelector('#sandbox-1 button')
var squareDiv = document.querySelector('.square')

// UTILIZING SCOPE
// Get the original pixel width & heights numbers and store
// it in a variable outside the function(){...}

var squareStyle = window.getComputedStyle(squareDiv);

var originalWidth = parseInt(squareStyle.width, 10)
var originalHeight = parseInt(squareStyle.height, 10)

// i.e. double up to 5x the original size
var doubleUntil_Multiple = 5

buttonEl.addEventListener('click', function(){
  console.log(squareStyle.width)

  var currentWidth =  parseInt(squareStyle.width, 10);
  var currentHeight = parseInt(squareStyle.height, 10);

  // and here we reference the original width
  if ( currentWidth <= (originalWidth * 2 * doubleUntil_Multiple) ){
    squareDiv.style.width =  (currentWidth  * 2) + "px"
    squareDiv.style.height = (currentHeight * 2) + "px"
  } else {

    squareDiv.style.width =  originalWidth + "px"
    squareDiv.style.height = originalHeight + "px"
  }

})

