// 03 - Configure The MultiView
//---------------------------------

// (1) Extend Backbone.View to `MultiDaterView`

// (2) Create the major properties/methods:
//     a) el
//     b) initialize
//     c) render

// (3) Render MutliDaterView to Page
//     a) Create instance on the router 
//     b) Test to make sure it shows up on page

// (4) Connect the MultiDaterView to the collection
//     a) Configure the MultiView's 'initialize' method to accept a collection
//        and store that collection as a property on the view
//     
//     b) On the view's collection, create an .on('sync', ... ) that will execute 
//        the view's render-method when a data-synchronziation event occurs (i.e. after a fetch)
//
//     c) In the Router, pass the collection to the view as an argument


// (5) Sanity Check - collection.models to the DOM
//     Build a for-loop to iterate over the collection's models and render very simple HTML 
//     dynamically in the view's render method

// (6) Cleanup - Create a method to build the HTML string
//     We will create on the `_buildTemplate` that will be responsible
//     for dynamically generating the HTML string from the models on the collection


var container_el = document.querySelector('#container')


var DaterModel = Backbone.Model.extend({
})

var DaterCollection = Backbone.Collection.extend({
  
  model: DaterModel,
  
  url: function(masParams){
    var apiKeyParam = "apikey=7ba96d266cc84b168fab4d878d9aa141"; 
    
    var queryParams =  apiKeyParam 
    if ( masParams ) { queryParams += '&' + masParams}

    var fullUrl = "http://congress.api.sunlightfoundation.com/legislators?" + queryParams
    
    this.url = fullUrl
    return fullUrl
  },

  //(3c)
  parse: function(rawData){
    //(5)
    return rawData.results
  }
})


var MultiDaterView = Backbone.View.extend({
  //(2a)
  el: "#container",

  //(6)
  _buildTemplate: function(theCollection){
    var htmlStr = ''
    for (i = 0; i < theCollection.models.length; i++){
      var m = theCollection.models[i]
      htmlStr += '<div class="profile-card">' 
      htmlStr +=   '<img src="http://flathash.com/'+ m.get('bioguide_id') +'">'
      htmlStr +=   "<h5>"+ m.get('first_name') + '</br>'
      htmlStr +=   '<small>' + m.get('state_name')+ '</small>'
      htmlStr +=   '</h5>'
      htmlStr += '</div>'
    }

    return htmlStr
  },

  //(2b)
  initialize: function(c){
    // (4a)
    this.coll = c

    // // (4b)
    this.coll.on('sync', this.render.bind(this) )
  },

  //(2c)
  render: function(){
    //(3b)
    console.log(this.coll)

    this.el.innerHTML = "<h2>So, so, so, so many...</h2>"
    this.el.innerHTML += this._buildTemplate(this.coll)

  
    //(5)
    // for (var i = 0; i < this.coll.models.length; i++){
    //   this.el.innerHTML += "<p>-" + this.coll.models[i].get('first_name') + "</p>" 
    // }

    //(6)
    // this.el.innerHTML += this._buildTemplate(this.coll)
  }
})


var AppRouter = Backbone.Router.extend({
  routes: {
    "profile/:bioId" : "showSingle",
    "*path"          : "showMultiHome"
  },

  showMultiHome: function(){
    // container_el.innerHTML = "<h2>So, so many </h2>"
    var laColeccion = new DaterCollection()
    
    var multiView = new MultiDaterView(laColeccion)

    laColeccion.fetch()

  },

  showSingle: function(bioId){
    var collectionOfOne = new DaterCollection()

    collectionOfOne.url("bioguide_id="+bioId)

    collectionOfOne.fetch().then(function(resData){
      console.log( collectionOfOne )
    })

    container_el.innerHTML = "<h4>Profile for: " + bioId + "</h4>"
  },

  initialize: function(){
    console.log('app is routing')
    Backbone.history.start()
  }

})


var app = new AppRouter()

