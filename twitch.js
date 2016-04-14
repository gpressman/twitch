$(document).ready(function(){

$.getJSON('https://api.twitch.tv/kraken/streams/OgamingSC2?callback=?', function(data) {
	console.log(data)

});

$.getJSON('https://api.twitch.tv/kraken/streams/OgamingSC2?callback=?', function(data) {
	console.log(data)
	if (data.stream == null ){
      $("#user").html("null")
     }
     else {
     	$("#user").html(data._links.self)
     }
});

})