// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

import $ from "jquery"
import _ from "underscore"
import Backbone from "backbone"


import DOM from 'react-dom'
import React, {Component} from 'react'

var ProductModel = Backbone.Model.extend({})

var ProductCollection = Backbone.Collection.extend({
  model: ProductModel
})

// var EtsyCollection = Backbone.Collection.extend({
//   accessToken: 'rtf0g2lb2o0xqsksl3jcro8z',

//   url: function(){
//     return "https://openapi.etsy.com/v2/listings/active.js?includes=Images&callback=?&api_key="+this.accessToken
//   },

//   parse: function(payload){
//     return payload.results
//   }
// })

var AppRouter = Backbone.Router.extend({
  routes: {
    "*default" : "showHome"
  },

  showHome: function(){
    
    var myList = [
      {title: 'Endangered tiger claw'},
      {title: 'Cool tee-shirt with shoulder spikes'},
      {title: "Cape dress"},
      {title: "Prosthetic tentacle for missing limb"}
    ]

    this.rCollection = new ProductCollection(myList);
    console.log(this.rCollection)

    DOM.render(<AppViewController vColl={ this.rCollection } />, document.querySelector('.container'))
  },

  initialize: function(){
    console.log('routeer?')
    Backbone.history.start();
  }
})

var AppViewController = React.createClass({
  getInitialState: function(){

    var initialStateObj = {
      isShowing: true
    }

    return initialStateObj
  },

  _handlePanelToggle: function(){

    if ( this.state.isShowing ){
      this.setState({
        isShowing: false
      })
    } else {
      this.setState({
        isShowing: true
      })
    }
  },

  _createRegrettablesJSX: function(modelsArr){

    var jsxElsArray = modelsArr.map( function(modl, indx){ 

      return <li key={indx}>{ modl.get('title') }</li> 

    })

    return jsxElsArray
  },

  render: function(){

    console.log("From AppView.render: ", this.props.vColl)
    console.log("state is showing", this.state.isShowing)
    
    var myStylesObj, btnTxt

    if (this.state.isShowing){
      myStylesObj = {right: "5px"}
      btnTxt = "x"
    } else {
      myStylesObj = {right: "-230px"}
      btnTxt = '<'
    }

    return (
      <div className={"regrets-list"} style={myStylesObj} >
        <h3>Hello from React</h3>
        <div className="side-panel">

          <ul>
            { this._createRegrettablesJSX(this.props.vColl.models) }
          </ul>

        </div>

        <button onClick={this._handlePanelToggle}> {btnTxt} </button>
      </div>
    )
  }
})

console.log(React)

var app = new AppRouter()

