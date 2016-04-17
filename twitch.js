$(document).ready(function(){
  var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "OgamingSC2"];
  var names = ""
  var status = ""
  users.forEach(function(user) {
  	  $.getJSON("https://api.twitch.tv/kraken/streams/" + user + "?callback=?", function(data) {
  	 if (data.error == "Unprocessable Entity"){
    	names += "<p>" + user + "</p>"
    	status += "<p> No user data </p>" 
    	}
     else if (data.stream == null ){
       names += "<p><a href='" + data._links.self + "'>" + user + "</a></p>"
       status += "<p> offline </p>"
     }
     else {
     	names = "<p><a href='" + data._links.self + "'>" + user + "</a></p>" + names
     	status = "<p>" + data.stream.channel.game+ ":" + data.stream.channel.status + "</p>"  + status
     }
  
    $("#names").html(names)    
    $("#status").html(status)
})
    })
  })
  




// $.getJSON('https://api.twitch.tv/kraken/streams/comster404?callback=?', function(data) {
// 	console.log(data)
//     if (data.error == "Unprocessable Entity"){
//     	$("#check").html("Account unavailable")
//     	}
// });

// $.getJSON('https://api.twitch.tv/kraken/streams/OgamingSC2?callback=?', function(data) {
// 	console.log(data)
// 	link = "<a href='" + data._links.self + "'>Link</a>"
//      	$("#user").html(link)
// 	if (data.stream == null ){
//       $("#status").html("offline")
//      }
//      else {
//      	game = data.stream.channel.game+ ":";
//      status = data.stream.channel.status
//      $("#game").html(game)
//      $("#status").html(status)
//      }

     
// });

