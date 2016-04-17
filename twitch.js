$(document).ready(function(){
  var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "OgamingSC2", "comster404"];
  var content= ""
  users.forEach(function(user) {
  	  $.getJSON("https://api.twitch.tv/kraken/streams/" + user + "?callback=?", function(data) {
  	 if (data.error == "Unprocessable Entity"){
    	content += "<div class='row offline'><div class='col-xs-3'>" + user + "</div>"
    	content += "<div class='col-xs-6'> No User Data </div></div>"
    	
    	}
     else if (data.stream == null ){
       content += "<div class='row offline'><div class='col-xs-3'>" + "<a href='" + data._links.self + "'>" + user + "</a>" + "</div>"
       content += "<div class='col-xs-6'>Offline</div></div>"  
       
     }
     else {
     	content = "<div class='col-xs-6'>" + data.stream.channel.game + ":" + data.stream.channel.status + "</div></div>" + content
     	content = "<div class='row online'><div class='col-xs-3'>" + "<a href='" + data._links.self + "'>" + user + "</a>" + "</div>" + content
     	
     	
     }
  
    $("#data").html(content)    
  
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

