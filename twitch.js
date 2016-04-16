$(document).ready(function(){
var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", "OgamingSC2"]
 
$(document).ready(function() {
  var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "OgamingSC2"];
var status = ""
  users.forEach(function(user) {
    $.getJSON("https://api.twitch.tv/kraken/streams/" + user + "?callback=?", function(data) {
    status += "<a href='" + data._links.self + "'>" + user + "</a><br>"
         
  $("#data").html(status)
    })
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

