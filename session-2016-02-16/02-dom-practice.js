
// PART 1 

//1) Store the HTML elements (i.e. DOM elements) in a variable 
var buttonEl = document.querySelector('#sandbox-1 button')
var squareDiv = document.querySelector('.square')

//2) Create the 'event listener' on the button
buttonEl.addEventListener('click', function(){
  //...and when a click event happens 

  // 3) access style properties of <div class="square"> element
  var squareStyle = window.getComputedStyle(squareDiv);

  // 4) capture the current width and height
  var currentWidth =  parseInt(squareStyle.width, 10);
  var currentHeight = parseInt(squareStyle.height, 10);
      //      note: squareStyle.width was a string value
      //            so we use parseInt convert to number
      //            ...we need a number for the if-statement below
  

  // 5) each time the button is clicked, test to see  
  //    if the current `div.square` width is less than 5x 
  //    the doubled-size of the original 
  if ( currentWidth <= (originalWidth * 2 * 5) ){
    squareDiv.style.width =  (currentWidth  * 2) + "px"
    squareDiv.style.height = (currentHeight * 2) + "px"
  } else {
    squareDiv.style.width =  20 + "px"
    squareDiv.style.height = 20 + "px"
  }

})


// PART 2 - REFACTORED

var buttonEl = document.querySelector('#sandbox-1 button')
var squareDiv = document.querySelector('.square')

// Get the original pixel width & heights numbers and store
// it in a variable outside the function()

var squareStyle = window.getComputedStyle(squareDiv);

buttonEl.addEventListener('click', function(){
  //on click increase the height * 2  and width * 2

  //1) capture current height value
  //2) capture current width numver-value
  var squareStyle = window.getComputedStyle(squareDiv);

  var currentWidth =  parseInt(squareStyle.width, 10);
  var currentHeight = parseInt(squareStyle.width, 10);

  // 4) 
  if ( currentWidth <= (20 * 2 * 5) ){
    squareDiv.style.width =  (currentWidth  * 2) + "px"
    squareDiv.style.height = (currentHeight * 2) + "px"
  } else {
    squareDiv.style.width =  20 + "px"
    squareDiv.style.height = 20 + "px"
  }

})

