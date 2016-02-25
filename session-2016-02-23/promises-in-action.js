// Task -- get data from external source for your application


// 1) in index.html load jQuery library in <script> 
//      BEFORE `main2.js`

//  <script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>

// 2) make sure jQuery is wired up
// console.log($)


// 3) use your browser to see if you can get json-data from a url
// url: https://randomuser.me/api/   ---- A-okay 

// 4) use $.getJSON(«url») to make the promise (retrieve the data) 
//     .... and .then( « callback_function » ) to handle it

$.getJSON("https://randomuser.me/api/?results=10&nat=us").then( function( dataFromApi ){
              // 4a) make sure that your callback function has an argument  ^^ (for where the data is passed)
  
  console.log('DATA FROM API')
  console.log( dataFromApi );

  // 5) Manipulate HTML from inside the callback function for the `then` method
    
  var cellphoneNo = dataFromApi.results[0].user.cell
  document.querySelector('#container-2').innerHTML = "<h2> User cell is: " + cellphoneNo + "</h2>"

})

