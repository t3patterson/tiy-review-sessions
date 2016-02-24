// DOM 101

// -I- ALL starts with SELECTORS

//... Before we can do anything, we must select the element

// document.querySelector(«css-selector») lets us select HTML element
// store the selected html-element-object into a variable
var ul_El = document.querySelector('.sandbox ul'),
    h1_El = document.querySelector('h1'),
    h3_El = document.querySelector('h3'),
    p_El = document.querySelector('p')


console.log(ul_El)

// NOTE: document.querySelector() returns us a javascript OBJECT 
//       of the HTML element with properties and values that we can
//       read and modify

//       so if we console.log the element inside of an array, 
//       we can look at all the properties! (hacky but useful)
console.log( [ul_El] )


console.log('================')

//-II- Getting & Setting Properties

//1) Getting Properties
console.log(ul_El.className)
console.log(ul_El.innerHTML)
console.log(ul_El.outerHTML)
console.log(ul_El.textContent)
console.log(ul_El.offsetHeight)
console.log(ul_El.offsetWidth)

  // other cool properties:
  //  «domEl».src (url-string for images)

  //  «domEl».type    (for input-el type)
  //  «domEl».checked  (for form check boxes -- returns true/false) 

// 2) Setting 
//      (note: not all properties are assignable)

//Clear everything
p_El.innerHTML = ""

//overwrite 
h3_El.outerHTML = "<h5>Was an h3, guess i'm an h5 now...big demotion</h5>"

//Append content(HTML or textContent)
h1_El.textContent = h1_El.textContent + "... nice!!"
ul_El.innerHTML += "<li>New York (for Justin...)</li>"

//Setting styles
ul_El.style.border = "4px solid #3A539B"
ul_El.style.width = "50%"

//...but a MUCH better pattern is to keep your styles in .css 
//   and just set classes which contain your styles
ul_El.className += " active"





