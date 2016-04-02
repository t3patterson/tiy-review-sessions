// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"


import DOM from 'react-dom'
import React, {Component} from 'react'

var ProductModel = Backbone.Model

var ProductCollection = Backbone.Collection.extend({
})

var EtsyCollection = Backbone.Collection.extend({
  accessToken: 'rtf0g2lb2o0xqsksl3jcro8z',

  url: function(){
    return "https://openapi.etsy.com/v2/listings/active.js?includes=Images&callback=?&api_key="+this.accessToken
  },

  parse: function(payload){
    return payload.results
  }
})



var AppRouter = Backbone.Router.extend({
  routes: {
    "*default" : "showHome"
  },

  showHome: function(){
  
  },

  initialize: function(){
    console.log('routeer?')
    Backbone.history.start();
  }
})

console.log(React)

new AppRouter()

