
//define array for list of channels
var channelsArray = ["ESL_SC2", "cretetion", "freecodecamp", "storbeck", "zatcharygaming", "hastad"];

for (var i=0; i<channelsArray.length; i++) {
	var channelName = channelsArray[i];
	var url = 'https://wind-bow.glitch.me/twitch-api/streams/' + channelName;
	$.getJSON(url, function(data){
		if(data.stream == null) {
			console.log('Nulliiiiiii');
		}
		else {
			console.log('ON hai ji');
		}
	});

	 //    if (data.stream == null) { 
	 //    	console.log(channelName + 'Offline');
	 //  //   	var html = '<li class="channel">';
	 //  //   	html += '<img src=" + imageSourceFromData + " class="avatar">';
	 //  //   	html += '<div class="details">';
	 //  //   	html += '<h4 class="channelName"><a href=" + urlFromData + ">channelsList[i]</a></h4>';
	 //  //   	html += '<p class="offline">Offline</p>'
	 //  //   	html += '</div>'
		// 	// </li>
		// 	// $(".channels").innerHTML(html);


		// }
		// else {
		// 	console.log(channelName + 'Online');
		// 	// <li class="channel">
		// 	// 	<img src=" + imageSourceFromData + " class="avatar">
		// 	// 	<div class="details">
		// 	// 		<h4 class="channelName"><a href=" + urlFromData + ">channelsList[i]</a></h4>
		// 	// 		<p class="online"> + statusFromData + </p>
		// 	// 	</div>
		// 	// </li>

		// }
} 


