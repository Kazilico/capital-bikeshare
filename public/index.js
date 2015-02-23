/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an object containing the data about
    the station at 23rd and Crystal Drive (which is ID "31011")
*/
var localStation = function(callback) {
$.ajax({

    url: "http://localhost:3000/stations",
    method: "GET",

    success: function(data) {

      var station = _.filter(data, function(station) {
        return (station.id === "31011")
      })
      callback(station[0])
    }
})

}

/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an object containing the data about 
    the northernmost station in the Capital Bikeshare system.
  (For simplicity's sake, the northernmost station is the one
    with the highest latitude.)
*/


var northernmostStation = function(callback) {
$.ajax({

    url: "http://localhost:3000/stations",
    method: "GET",

    success: function(data) {
      
      var station = _.max(data, function(station) {
        return (station.latitude)         
      })
      callback(station)
    }
})
}
  
/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an object containing the data about 
    a single, random station in the Capital Bikeshare system.
*/
var randomStation = function(callback) {
$.ajax({

    url: "http://localhost:3000/stations",

    method: "GET",

    success: function(data) {
      console.log(data)

    var station = function getRandomArbitrary(min, max) {
      return station(station.name)     
    }
    console.log(station)
    callback(station)
    }

})
  
}


/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an array containing the data about
    any stations in the Capital Bikeshare system that currently have 0 bikes.
*/
var emptyStations = function(callback) {

  
}

/*
  This function accepts a callback function as a parameter.

  It calls the callback function with an array containing the data about
    any stations in the Capital Bikeshare system that have been updated
    in the last 15 minutes.
*/
var recentStations = function(callback) {

  
}
