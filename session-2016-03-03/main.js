// Why Constructors (pt 1)?

// Let's build a useful view constructor -- we wanna make it flexible
//    1) Select   - needs to target an element on the page where it will render 
//    2) Template - needs to take data and build an html-string dynamically (templating)
//    3) Render   - needs to put the html with the data on the page

var ViewConstructor = function( dom_node_element, templateBuilder_fn ){
  this._el = dom_node_element;
  this._template = templateBuilder_fn;

  this.renderHTML = function(inputData){
    
    var target_el = document.querySelector(this._el)
    target_el.innerHTML = this._template(inputData)

  }
}
// ===========================================================

var buildProfileTemplate = function(userObj){
  var htmlStr  = '<div class="profile-container">'
      htmlStr  +=   '<img src="'+userObj.picture+'">'
      htmlStr  +=   '<h5>'+ userObj.name + '</h5>'
      htmlStr  +=   '<h6>'+ userObj.city + '</h6>'
      htmlStr  +=   '<p>'+ userObj.email + '</p>'
      htmlStr  += '</div>'

  return htmlStr
}

var buildNavBarTemplate = function(navArr){
  // navArr = ['Home', 'About', 'Contact', 'Portfolio' ]
  var htmlStr = ''

  for (var i = 0; i < navArr.length; i++){
      htmlStr += '<button>' + navArr[i] + '</button>'
  }

  return htmlStr

}

// WHERE I WANT TO END UP
//.................
var navViewInstance     = new ViewConstructor( "#nav-container"    , buildNavBarTemplate  )
var contentViewInstance = new ViewConstructor( "#content-container", buildProfileTemplate )
var footerViewInstance  = new ViewConstructor( "#footer-container",  buildNavBarTemplate )


//.... some things happen and we have our data!

var henrikUser = {
  name: "Henrik",
  email: "henrik@gmail.com",
  picture: "https://robohash.org/henrik",
  city: 'Arhus'
}

var navOps = ['Home', 'About', 'Contact', 'Portfolio']

navViewInstance.renderHTML(navOps)
contentViewInstance.renderHTML(henrikUser)
footerViewInstance.renderHTML(navOps)


// #content-container.innerHTML ---> 

// <div class="profile-container"> 
//    <img src="https://robohash.org/henrik">
//    <h5>Henrik</h5>
//    <h6>Arhus</h6>
//    <p>henrik@gmail.com</p>
// </div>