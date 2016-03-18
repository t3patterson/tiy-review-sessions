// 01 - Configure Router
//---------------------------------

// (0) Make sure jQuery, _, and BB are wired UP!

// (1) extend Backbone.Router

// (2) create router instance with `new` keyword

// (3) set routes + route-callback functions

// (4) create route-callback functions for our 2 routes

// (5) tell the router to take over browser-history/hash-routes with Backbone.history.start()
//      in the Router's `initialize` function

var container_el = document.querySelector('#container')

// console.log($)
// console.log(_)
// console.log(Backbone)


var AppRouter = Backbone.Router.extend({
  routes: {
    "profile/:bioId" : "showSingle",
    "*path"          : "showMultiHome"
  },

  showMultiHome: function(){
    container_el.innerHTML = "<h2>So, so many </h2>"
  },

  showSingle: function(bioId){
    container_el.innerHTML = "<h4>Profile for: " + bioId + "</h4>"
  },

  initialize: function(){
    console.log('app is routing')
    Backbone.history.start()
  }

})


var app = new AppRouter()

