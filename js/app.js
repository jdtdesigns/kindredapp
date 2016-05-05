var app = (function() {
	var init = function() {
		showTimes();
	};

	var showTimes = function() {
		var gmt 		= new Date(),
			offset 		= gmt.getTimezoneOffset() / 60,
			userTime 	= '',
			page 		= document.getElementsByClassName('Times__members')[0],
			html 		= '';
			
			gmt.setHours(gmt.getHours() + offset);
			for ( var member in members ) {
				userTime = new Date(new Date().setHours(gmt.getHours() + members[member].gmt));

				html += '<div class="Times__member row column-center">' +
							'<span class="Times__member-name">' + member + '</span>' +
							'<span class="Times__member-time">'+ userTime.getHours() + ':' + userTime.getMinutes() + '</span>' +
						'</div>';
			}

			page.insertAdjacentHTML('beforeend', html);
	};

	return {
		init: init
	};
})();

app.init();
