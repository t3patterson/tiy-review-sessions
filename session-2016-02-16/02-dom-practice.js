
var buttonEl = document.querySelector('#sandbox-1 button')
var squareDiv = document.querySelector('.square')
console.log(squareDiv)

var squareStyle = window.getComputedStyle(squareDiv);

var originalWidth = parseInt(squareStyle.width, 10)
var originalHeight = parseInt(squareStyle.height, 10)



buttonEl.addEventListener('click', function(){
  //on click increase the height * 2  and width * 2

  //1) capture current height value
  //2) capture current width numver-value
  
  var currentWidth = parseInt(squareStyle.width, 10);
  var currentHeight = parseInt(squareStyle.width, 10);

  // 3)increase current height & width value
  console.log(currentWidth)

  // 4) 
  if ( currentWidth <= (originalWidth * 2 * 5) ){
    squareDiv.style.width = (currentWidth*2) + "px"
    squareDiv.style.height = (currentHeight*2) + "px"
  } else {
    squareDiv.style.width =  originalWidth + "px"
    squareDiv.style.height = originalHeight + "px"
  }

})

