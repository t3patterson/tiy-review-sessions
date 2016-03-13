var container_el = document.querySelector('#container')

var ProfileModel = Backbone.Model.extend({

  url: function(moreParams){
    var apiKeyParam = "apikey=7ba96d266cc84b168fab4d878d9aa141"; 
    
    var queryParams =  apiKeyParam 
    if ( moreParams ) { queryParams += '&' + moreParams}

    var fullUrl = "http://congress.api.sunlightfoundation.com/legislators?" + queryParams

    this.url = fullUrl
    return fullUrl
  },

  parse: function(respData){
    console.log(respData)

    var parsed = respData

    if(respData.results && respData.results.length === 1){
      parsed = respData.results[0]
    }
    return parsed
  },

  initialize: function(){
  }
})

var ProfileCollection = Backbone.Collection.extend({
  model: ProfileModel,

  url: function(){
    return this.model.prototype.url.call(this)
  },

  parse: function(d){
    console.log('parsing collection 4 u')
    return d.results
  }
})

var ProfileMultiView = Backbone.View.extend({
  el: '#container',
  
  coll: null,

  events: {
    "click .profile-card" : "handleProfileSelect"
  },

  handleProfileSelect: function(e){
    window.location.hash = "/profile/"+e.currentTarget.id
  },

  initialize: function(collectionPls){
    this.coll = collectionPls
    console.log(this.coll)
    this.coll.on("sync", this.render.bind(this) )
  },

  _buildTemplate: function(aCollection){
    var htmlStr = ''
    var collModels = aCollection.models
    for (var i = 0; i < collModels.length ; i++){
      var m = collModels[i]
      htmlStr += '<div class="profile-card" id='+m.get('bioguide_id')+'>' 
      htmlStr +=   '<img src="http://flathash.com/'+ m.get('bioguide_id') +'">'
      htmlStr +=   "<h5>"+ m.get('first_name') + "</h5>"
      htmlStr += '</div>'
    }
    console.log(htmlStr)
    return htmlStr
  },

  render: function(){
    this.el.innerHTML = this._buildTemplate(this.coll)
    return this
  }
})

var AppRouter = Backbone.Router.extend({
  routes: {
    "profile/:id" : "showSingle",
    "*default" : "showProfiles"  
  },

  showProfiles: function(){
    console.log('home page routing!')
    
    var collectionInstance = new ProfileCollection();
    var hottiesView = new ProfileMultiView(collectionInstance)
 
    collectionInstance.fetch()
  },

  showSingle: function(bioId){
    console.log('single')
    var singleHotty = new ProfileModel()
    
    singleHotty.url("bioguide_id="+bioId)
    
    singleHotty.fetch().then(function(r){
      var bigStr  = '<div class="single-profile">'
          bigStr +=   '<div class="main">'
          bigStr +=     '<img src="http://flathash.com/'+ singleHotty.get('bioguide_id') +'"/>'
          bigStr +=     '<h4> &hearts; '+ singleHotty.get('district') + '</h4>'
          bigStr +=   '</div>'
          bigStr +=   '<div class="details">'
          bigStr +=     '<h3>'+singleHotty.get('first_name') + '</h3>'

          bigStr +=     '<h6>Age:</h6>'
          bigStr +=     '<p>' +singleHotty.get('birthday')+ '</p>'
          bigStr +=     '<h6>Address:</h6>'
          bigStr +=     '<p>' + singleHotty.get('office') + '</p>'
          bigStr +=     '<h6>Originally From:</h6>'
          bigStr +=     '<p>' + singleHotty.get('state') + '</p>'
          bigStr +=     '<h6>Member Since:</h6>'
          bigStr +=     '<p>' + singleHotty.get('term_start') + '</p>'
          bigStr +=     '<h6>For a good time:</h6>'
          bigStr +=     '<p>  ' + singleHotty.get('oc_email') + '</p>'
          bigStr +=     '<h6>[R]elaxed or [D]emanding:</h6>'
          bigStr +=     '<p>'+ singleHotty.get('party') + '</p>'
          bigStr +=   '</ul>'
          bigStr +=  '</div>'

      container_el.innerHTML= bigStr
    })
  },


  initialize: function(){
    console.log('router on!')
    Backbone.history.start()
  }
})

var myApp = new AppRouter()

