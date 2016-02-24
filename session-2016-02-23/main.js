// TASK -- Member's Only
// ----------------------------------------
//   Take the data stored in an object and filter for the members 
//   and put the members on the screen in the following format:

//  <div>
//    <h3> Member «#» </h3>
//    <img src="«url»" >
//  </div>

var someData = {
  partialList: true,
  updatedAt: 1330037433589,
  requestedBy: "Snack Pax 4 U",
  list: [
    {isMember: true, profilePic: "https://randomuser.me/api/portraits/thumb/women/61.jpg"},
    {isMember: false, profilePic: "https://randomuser.me/api/portraits/thumb/women/28.jpg"},
    {isMember: true, profilePic: "https://randomuser.me/api/portraits/thumb/men/16.jpg"},
    {isMember: true, profilePic: "https://randomuser.me/api/portraits/thumb/women/9.jpg"},
    {isMember: true, profilePic: "https://randomuser.me/api/portraits/thumb/women/14.jpg"},
    {isMember: false, profilePic: "https://randomuser.me/api/portraits/thumb/women/13.jpg"},
    {isMember: true, profilePic: "https://randomuser.me/api/portraits/thumb/women/51.jpg"},
    {isMember: false, profilePic: "https://randomuser.me/api/portraits/thumb/women/61.jpg"},
    {isMember: true, profilePic: "https://randomuser.me/api/portraits/thumb/men/26.jpg"},
    {isMember: false, profilePic: "https://randomuser.me/api/portraits/thumb/women/41.jpg"},
    {isMember: true, profilePic: "https://randomuser.me/api/portraits/thumb/men/6.jpg"},
    {isMember: false, profilePic: "https://randomuser.me/api/portraits/thumb/women/8.jpg"},
    {isMember: true, profilePic: "https://randomuser.me/api/portraits/thumb/men/47.jpg"},
    {isMember: false, profilePic: "https://randomuser.me/api/portraits/thumb/women/4.jpg"},
    {isMember: false, profilePic: "https://randomuser.me/api/portraits/thumb/men/36.jpg"},
    {isMember: false, profilePic: "https://randomuser.me/api/portraits/thumb/women/26.jpg"},
    {isMember: true, profilePic: "https://randomuser.me/api/portraits/thumb/women/16.jpg"}
    ]
}

// PART 1 -- Make a function that takes an object with an array-of-objects 
//           and returns an array of only those objects that meet a criteria

  // INPUT -- obj (contains a list/array of objects with relevant data)
  // OUTPUT -- array of objects (that have isMember property as 'true')

var getMembersList = function (dataObj){
  
  // 1) access the property that contains relevant data-array 
  var allPeopleList = dataObj.list;

  // 2) create our empty array-builder
  var membersOnlyList = [];

  // 3) iterate over the data-array
  for (var i = 0 ; i < allPeopleList.length ; i++ ){

    // 4) test to see which elements on the data-array meet our condition
    //    (x.isMember === true)
    if ( allPeopleList[i].isMember === true ){
      membersOnlyList.push( allPeopleList[i] ) 
    }  

  }

  // 5) return the array-builder 
  return membersOnlyList  
}

var membersArray = getMembersList(someData)



// PART 2 --- Convert array-of-objects to an html string

  // INPUT: membersArray
    // [
    //   {
    //     isMember: true
    //     profilePic: "https://randomuser.me/api/portraits/thumb/women/61.jpg"
    //   },
    //   {
    //     isMember: true
    //     profilePic: "https://randomuser.me/api/portraits/thumb/men/32.jpg"
    //   },
    //   ...
    // ]

  // OUTPUT:
  //  "  <div>
  //       <h3> Member «#» </h3>
  //       <img src="«url»"  >
  //     </div>  "
  // 
  //    * 7

console.log(  membersArray  );

var convertMemberObjectsToHTML = function(listArray){
  var container_El = document.querySelector('#container')

  // iterate over membersArray 
  for( var i = 0 ; i < listArray.length ; i++ ){
      //Access relevant property from each element on the array
      //  (in this case, the profilePic)
      var picURL = listArray[i].profilePic

      // Build HTML-String that you will append to DOM
      //   (also...you could create a separate function for this task)
      var htmlStr =  "<div >" 
          htmlStr +=   "<h4>Member " + (i + 1) + "</h4>"
          htmlStr +=   "<img src='" + picURL + "'>"
          htmlStr += "</div>"

      //Append the HTML-String to the DOM
      //  note the use of `+=` instead of `=`
      container_El.innerHTML += htmlStr;
  }
}

convertMemberObjectsToHTML(membersArray)
  


  









