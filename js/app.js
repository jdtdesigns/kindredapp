var app = (function() {
	var init = function() {
		showTimes();
		document.getElementById('search').addEventListener('keyup', getMember);
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

	var getMember = function() {
		var input = this.value.toLowerCase(),
			names = document.getElementsByClassName('Times__member-name'),
			matches = [];

			if (!String.prototype.includes) {
				String.prototype.includes = function() {
					'use strict';
					return String.prototype.indexOf.apply(this, arguments) !== -1;
				};
			}
			
		for ( var i = 0; i < names.length; i++ ) {
			if ( names[i].innerHTML.toLowerCase().includes(input) ) {
				matches.push(names[i]);
			}

			names[i].parentElement.classList.add('hide');
		}

		matches.map(function(name) {
			name.parentElement.classList.remove('hide');
		});
	};

	return {
		init: init
	};
})();

app.init();
