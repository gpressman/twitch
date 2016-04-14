$(document).ready(function(){



$.getJSON('https://api.twitch.tv/kraken/users/freecodecamp?callback=?', function(data) {
  $("#user").html(data.name)

});

})