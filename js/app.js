var app = (function() {
	var init = function() {
		showTimes();
	};

	var showTimes = function() {
		var gmt 		= new Date(),
			offset 		= gmt.getTimezoneOffset() / 60,
			userTime 	= '',
			userHours	= '',
			userMintues	= '',
			page 		= document.getElementsByClassName('Times__members')[0],
			html 		= '';
			
			gmt.setHours(gmt.getHours() + offset);
			
			for ( var member in members ) {
				userTime 	= new Date(new Date().setHours(gmt.getHours() + members[member].gmt));
				userHours 	= userTime.getHours() < 10 ? '0' + userTime.getHours() : userTime.getHours();
				userMinutes = userTime.getMinutes() < 10 ? '0' + userTime.getMinutes() : userTime.getMinutes();

				html += '<div class="Times__member row column-center">' +
							'<span class="Times__member-name">' + member + '</span>' +
							'<span class="Times__member-time">'+ userHours + ':' + userMinutes + '</span>' +
						'</div>';
			}

			page.insertAdjacentHTML('beforeend', html);
	};

	return {
		init: init
	};
})();

app.init();
