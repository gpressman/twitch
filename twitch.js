$(document).ready(function(){

$.getJSON('https://api.twitch.tv/kraken/streams/OgamingSC2?callback=?', function(data) {
	console.log(data)

});

$.getJSON('https://api.twitch.tv/kraken/streams/OgamingSC2?callback=?', function(data) {
	console.log(data)
	link = "<a href='" + data._links.self + "'>Link</a>"
     	$("#user").html(link)
	if (data.stream == null ){
      $("#status").html("offline")
     }
     else {
     	game = data.stream.channel.game+ ":";
     status = data.stream.channel.status
     $("#game").html(game)
     $("#status").html(status)
     }

     
});

})