/**
Created By:John Joshua Lipio
Twitter:@johnjoshualipio
Version:1.0.0
**/
(function ($) {
	$.fn.avatarInitial = function (options) {
		var settings = $.extend({
			bgColors: ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#8e44ad', '#2c3e50', '#f1c40f', '#e67e22', '#ecf0f1', '#95a5a6', '#f39c12', '#d35400', '#c0392b', '#bdc3c7', '#7f8c8d'],
			textColor: '#ffffff',
			name: 'avatarInitial',
			size: 100,
			override: false,
			alt: true,
            fontSize: 60,
            fontWeight: 100,
            fontFamily: 'HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif',
            radius: 0,
			onlyOne: true
		}, options);
		return this.each(function () {
			var e = $(this);
			var ai = "";
			settings = $.extend(settings, e.data());
			if(e.prop('nodeName') == 'IMG'){
				var i = (settings.onlyOne?settings.name.substr(0,1):settings.name.match(/^\w|\b\w(?=\S+$)/g).join('')).toUpperCase();
				var text = $('<text text-anchor="middle">'+i+'</text>').attr({
					'y': '50%',
					'x': '50%',
					'dy' : '0.35em',
					'fill': settings.textColor,
					'font-family': settings.fontFamily
				}).css({
					'font-weight': settings.fontWeight,
					'font-size': settings.fontSize+'px',
				});
				var svg = $('<svg xmlns="http://www.w3.org/2000/svg"></svg>').attr({
					'width': settings.size+'px',
					'height': settings.size+'px'
				}).css({
					'background-color': settings.bgColors[Math.floor((i.charCodeAt(0)+(i.length==1? 0:i.charCodeAt(1))) % settings.bgColors.length)],
					'width': settings.size+'px',
					'height': settings.size+'px',
					'border-radius': settings.radius+'px',
					'-moz-border-radius': settings.radius+'px'
				});
				svg.append(text);
				ai = 'data:image/svg+xml;base64,'+window.btoa(unescape(encodeURIComponent($('<div>').append(svg.clone()).html())));
				if(e.attr("src")=="" || typeof e.attr("src") === 'undefined'){
					e.attr("src",ai);
				}
				if(settings.override){e.attr("src",ai);}
			}
			e.one('error',function(){if(settings.alt){this.src=ai}});
		});
	};
}(jQuery));