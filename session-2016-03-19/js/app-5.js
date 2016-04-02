// 05 - View Events & Clearing Zombie Views
//---------------------------------

// (1) Connect the multiview to the single view
//      a) build events object : '«evt» «domEl»': «_callback»
//      b) create `_navToSingle` callback 
//      c) make sure that we can access the bioguide_id on each div.profile-card
//      d) access the bioguide_id from the event-object in the callback's parameter
//         with Backbone's evt.currentTarget 

// (2) Use the router to manage the view state of the '.container' element 
//     a) Create `containerView` as a property on the Router and set the `this.containerView`
//        as the view instances created by MultiDaterView and SingleDaterView

//     b)  On the `showSingle` route, test to see if there is already a containerView, and if there is,
//         we will clear the container
//
//     c)  Create a `_clearView` method that will test for a view and clear its innerHTML

//     d)  Clear errthing : innerHTML, view-events, backbone-events




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
  el: "#container",

  events: {
    "click .profile-card"  :  "_navToSingle",
  },

  _navToSingle: function(evt){
      // console.log(evt)
      // console.log(evt.target)
      console.log(evt.currentTarget.id)

      window.location.hash = "profile/"+evt.currentTarget.id

  },

  _buildTemplate: function(theCollection){
    var htmlStr = ''
    for (i = 0; i < theCollection.models.length; i++){
      var m = theCollection.models[i]
      htmlStr += '<div class="profile-card" id="'+ m.get('bioguide_id') + '">'
      htmlStr +=   '<img src="http://flathash.com/'+ m.get('bioguide_id') +'">'
      htmlStr +=   "<h5>"+ m.get('first_name') + '</br>'
      htmlStr +=   '<small>' + m.get('state_name')+ '</small>'
      htmlStr +=   '</h5>'
      htmlStr += '</div>'
    }

    return htmlStr
  },

  initialize: function(c){
    this.coll = c

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

var SingleDaterView = Backbone.View.extend({
  el: "#container",
  
  _buildTemplate: function(theCollection){
    var dtrModels = theCollection.models,
        currentI  = 0

    //(5)
    var htmlStr = '<div class="single-profile">'
        htmlStr+=  '<div class="main">'
        htmlStr+=    '<img src="http://flathash.com/'+ dtrModels[currentI].get('bioguide_id')+'" />'
        htmlStr+=    '<h4> &hearts; ' + dtrModels[currentI].get('district') +   '</h4>'
        htmlStr+=    '<button class="add-to-favs" data-bio="'+ dtrModels[currentI].get('bioguide_id') +'">+</button>'
        htmlStr+=  '</div>'
        htmlStr+=   '<div class="details">'
        htmlStr+=    '<h3> '+ dtrModels[currentI].get('first_name') +  ' </h3>'
        htmlStr+=    '<h6>D.O.B:</h6>'
        htmlStr+=    '<p> ' + dtrModels[currentI].get('birthday') + '</p>'
        htmlStr+=    '<h6>Address:</h6>'
        htmlStr+=    '<p> '  + dtrModels[currentI].get('office') +   '</p>'
        htmlStr+=    '<h6>Originally From:</h6>'
        htmlStr+=    '<p> '  + dtrModels[currentI].get('state_name') +   '</p>'
        htmlStr+=    '<h6>Member Since:</h6>'
        htmlStr+=    '<p> '  + dtrModels[currentI].get('term_start') +   '</p>'
        htmlStr+=    '<h6>Get in Touch:</h6>'
        htmlStr+=    '<p>'   + dtrModels[currentI].get('oc_email') +   '<br/>|'  + dtrModels[currentI].get('phone') +    '|</p>'
        htmlStr+=    '<h6>[R]elaxed or [D]emanding:</h6>'
        htmlStr+=    '<p>'  + dtrModels[currentI].get('party') +   '</p>'
        htmlStr+=   '</div>'
        htmlStr+= '</div>'

    return htmlStr
  },

  initialize: function(c){
    this.coll = c
    this.coll.on( "sync" , this.render.bind(this) )
  },

  render: function(){
    // var lastName = this.coll.models[0].get('last_name')
    this.el.innerHTML = this._buildTemplate(this.coll)
  }
})


var AppRouter = Backbone.Router.extend({
  routes: {
    "profile/:bioId" : "showSingle",
    "*path"          : "showMultiHome"
  },

  showMultiHome: function(){
    this._clearView(this.containerView)

    // container_el.innerHTML = "<h2>So, so many </h2>"
    var laColeccion = new DaterCollection()
    
    // var multiView = new MultiDaterView(laColeccion)
    this.containerView = new MultiDaterView(laColeccion)

    laColeccion.fetch()
  },

  showSingle: function(bioId){
    this._clearView(this.containerView)

    if(this.containerView)
    console.log('hiiii')

    var collectionOfOne = new DaterCollection()
    
    // var singleView = new SingleDaterView(collectionOfOne)
    this.containerView = new SingleDaterView(collectionOfOne)

    collectionOfOne.url("bioguide_id="+bioId)

    collectionOfOne.fetch().then(function(resData){
      console.log( collectionOfOne )
    })

    // container_el.innerHTML = "???????"
  },

  _clearView: function(viewInstance){
    if(viewInstance !== undefined) {
      viewInstance.undelegateEvents()
      viewInstance.off()
    }
  },

  initialize: function(){
    console.log('app is routing')
    Backbone.history.start()
  }

})


var app = new AppRouter()

