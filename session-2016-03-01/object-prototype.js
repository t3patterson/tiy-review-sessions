var UserProfile = function(n, b){
  this.name = n;
  this.balance = b
}

UserProfile.prototype.introduce = function(moreInfo){
  console.log("My name is " + this.name +" in case you were wondering");
}

UserProfile.prototype.changeBalance = function(num){
  this.balance = this.balance + num
  console.log("the new balance for <" + this.name +"> is::" + this.balance)
  return this.balance
}

var user1 = {
  name: "Bill",
  balance: 100
}

var user1 = new UserProfile('Bill', 100);
var user2 = new UserProfile('Wendy', 130);
var user3 = new UserProfile('Tina', 190);
var user4 = new UserProfile('Brad', 4);
var user5 = new UserProfile('Tim', 33);
var user6 = new UserProfile('Chandra', 21);
var user7 = new UserProfile('Becky', 2);

user6.changeBalance(180)
user7.changeBalance(21)


// -----------------------

var someObjectLikeAnArray = {
  "0": "spaghetti",
  "1": "meatballs",
  "2": "steak",
  "3": "pizza",
  length: 4
}

