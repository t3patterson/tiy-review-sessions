var fc_url = "https://api.forecast.io/forecast/d8a03dc60491af5fd9965e0691c2bd54/-29,95.5?callback=?"

console.log(fc_url)

$.getJSON(fc_url).then(function(responseData){
  console.log(responseData)
  console.log(responseData.daily.data[1])




  console.log("Forecast For Tomorrow -- ???FRIDAY??? ")
  console.log('-------- TEMP ------------')
  console.log( responseData.daily.data[1].temperatureMax )

})



  // Date object -- time_value: NOW
  var nowDate = new Date()
  console.log(nowDate)

  // convert date object to an integer 
  var dateInt_ms = nowDate.getTime() 

  // add 24 hours of milliseconds
  var dateInt_Plus24Hrs  = dateInt_ms + 1000*60*60*24

  // Create a new javascript date-object w/ the millisecond value
  var datePlus24 = new Date( newDate )
  console.log(datePlus24)

// 
// ================================

  var nowDateObj = new Date()
  var dayInt_ms = nowDateObj.getTime()  // milliseconds

  var weakArray = [] ;

  for(var i = 1; i <= 7; i++){
    dayInt_ms += 1000*60*60*24
    var dayObj = new Date(dayInt_ms)
    console.log(dayObj)
    weakArray.push(dayObj)

  }

  console.log(weakArray)



