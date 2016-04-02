// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"
import fetch from "isomorphic-fetch"

import DOM from 'react-dom'
import React, {Component} from 'react'

import $ from 'jquery'
import _ from 'underscore'
import Firebase from 'firebase'
import BackboneFire from 'bbfire'

var rootFbURL = "https://secretswalkthru99.firebaseio.com/"
var fbRef = new Firebase(rootFbURL)

var UserSecretsCollection = BackboneFire.Firebase.Collection.extend({
  url: '',
  initialize: function(){
    this.url = rootFbURL + 'userSecrets/'
  }
})

var HomeView = React.createClass({
  getInitialState: function(){
    return {
      userSecretsColl: this.props.userSecrets
    }
  },

  _generateSecretsJSX: function(mdl, indx){
    return (
      <li>
        <span className="usr">{ mdl.get('username') }</span>
        <span className="usr-secret">{ mdl.get('theSecret') }</span>
      </li> 
    )
  },

  componentDidMount: function(){
    var component = this
    this.props.userSecrets.on('sync', function(){
      console.log
      component.setState({
        userSecretsColl: component.props.userSecrets
      })

    })
  },

  _handleLogout: function(){
    fbRef.unauth();
    myAppRtr.navigate('authenticate', {trigger: true})
  },

  render: function(){
    var component = this
    return (
      <div id="secrets-view">
        <h1>The Secrets</h1>
        <button onClick={this._handleLogout}>Log Out</button>
        <ul>
          {this.state.userSecretsColl.models.map( component._generateSecretsJSX ) }
        </ul>
      </div>
    )
  }
})

var AuthView = React.createClass({

  _handleSignUp: function(evt){
    evt.preventDefault();
    var emailInput =  evt.currentTarget.email.value 
    var pwInput    =  evt.currentTarget.password.value
    var usernameInput  = evt.currentTarget.username.value 
    var secretInput  = evt.currentTarget.secret.value

    console.log(emailInput, pwInput, usernameInput, secretInput)

    var newUser = {
        email: emailInput,
        password: pwInput
    }

    fbRef.createUser(newUser, function(err, authData){

      var userSecretsColl = new UserSecretsCollection()
      console.log(usernameInput)
      console.log(secretInput)

      userSecretsColl.create({
        username: usernameInput,
        theSecret: secretInput,
        uid: authData.uid
      })

    })

  },

  _handleLogIn: function(evt){
    evt.preventDefault();

    var emailInput =  evt.currentTarget.email.value 
    var pwInput    =  evt.currentTarget.password.value
    
    var authDataObj = {
      email: emailInput,
      password: pwInput
    }

    fbRef.authWithPassword(authDataObj, function(err, authData){
      if (err) {
        alert('sorry, credentials not valid!!')
      } else {
        myAppRtr.authenticatedUser = authData
        myAppRtr.navigate('', {trigger: true}) 
      }
    })

  },

  render: function(){
    return (
      <div>
        <form onSubmit={this._handleSignUp}>
          <h3 className="signup">Sign Up And Tell Me Your Secret!</h3>

          <input type="text" id="email" placeholder="Email"/><br/>
          <input type="password" id="password" placeholder="Password"/><br/><br/>

          <input type="text" id="username" placeholder="Your Name"/><br/>
          <textarea type="text" id="secret" placeholder="tell me your secret!!"/>
          <input className="button-primary" type="submit" defaultValue="Sign Up"/><br/>
        </form>

        <hr/>

        <form onSubmit={this._handleLogIn}>
          <h3 className="signin">Sign In</h3>
          <input type="text" id="email" placeholder="Email"/><br/>
          <input type="password" id="password" placeholder="Password"/><br/>
          <input className="button-primary" type="submit" defaultValue="Log In"/><br/>
        </form>
      </div>
    )
  }
})

var AppRouter = BackboneFire.Router.extend({
  routes: {
    "authenticate" : 'showAuth',
    "*path"   : 'showHome'
  },

  showHome: function(){
    if (this.authenticatedUser === null){ 
      this.navigate('authenticate', { trigger: true } );
      return
    }

    var theSecretsColl = new UserSecretsCollection()

    theSecretsColl.on('sync', function(){
      console.log(theSecretsColl.models)
    })

    DOM.render( <HomeView userSecrets={theSecretsColl} /> , document.querySelector('.container') )
  },

  showAuth: function(){
    DOM.render( <AuthView/>, document.querySelector('.container'))
  },

  initialize: function(){
    console.log('app routing...')

    var rtr = this

    fbRef.onAuth(function(authData){
      if( authData === null ){
        rtr.authenticatedUser = null
      } else {
        rtr.authenticatedUser = authData
      }
    })

    BackboneFire.history.start()
  }
})



var myAppRtr = new AppRouter()

