// TASK

// Create a button that, when clicked, takes text from an 
//  <input> element and and appends a list-item to the <ul>

// STEPS TO COMPLETE
//   SETUP -- Create HTML (button and input elements)
//   1-- Determine which element RECEIVES the event
//   2-- Create Event Listener (`.addEventListener`)
//   3-- Determine what happens to other elements,
//        AFTER that event occurs...this will involve



// CREATING EVENT LISTENER

// 1) Identify element that is RECEIVING the event 
//   (e.g. like a button)



//2) Determine what the event is 
//   (e.g. 'click', 'keypress on space-bar', 'hover', 'form submit' ??)


//3) Determine what happens to the other elements


document.querySelector('button').addEventListener('click',function(){
  //SELECTORS
  ul_El = document.querySelector('ul')
  cityInput_El = document.querySelector('input')

  //1- sanity test
  // alert('hiiii!')

  //2- get the input text

  var cityTxt = cityInput_El.value

  console.log(cityTxt)

  //3- Add to <ul>
  ul_El.innerHTML += "<li class>"+cityTxt+"</li>"

  cityInput_El.value = ""

})


