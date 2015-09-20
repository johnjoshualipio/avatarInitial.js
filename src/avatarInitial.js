/**
 * Created by Lipzycho on 9/20/2015.
 */
(function ($) {
    $.fn.avatarInitial = function (options) {
        return this.each(function () {
            var ai = $(this);
            var settings = $.extend({
                bgColors: ['#a3a948', '#edb92e', '#f85931', '#ce1836', '#009989'],
                bgRandom: false,
                textColor: '#ffffff',
                charLimit: 2,
                name: 'avatarInitial',
                height: 100,
                width: 100,
                fontSize: 60,
                fontWeight: 400,
                fontFamily: 'HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif',
                radius: 0
            }, options);
            settings = $.extend(settings, ai.data());
            var i = (charLimit == 1?settings.name.substr(0, settings.charCount):settings.name.match(/^\w|\b\w(?=\S+$)/g).join('')).toUpperCase();
            var iobj = $('<text text-anchor="middle"></text>').attr({
                'y': '50%',
                'x': '50%',
                'dy' : '0.35em',
                'pointer-events':'auto',
                'fill': settings.textColor,
                'font-family': settings.fontFamily
            }).html(i).css({
                'font-weight': settings.fontWeight,
                'font-size': settings.fontSize+'px'
            });

            var svg = $('<svg></svg>').attr({
                'xmlns': 'http://www.w3.org/2000/svg',
                'pointer-events':'none',
                'width': settings.width,
                'height': settings.height
            }).css({
                'background-color': settings.bgColors[Math.floor(settings.bgRandom?Math.random() * settings.bgColors.length:(c.charCodeAt(0)) % settings.bgColors.length)],
                'width': settings.width+'px',
                'height': settings.height+'px',
                'border-radius': settings.radius+'px',
                '-moz-border-radius': settings.radius+'px'
            });

            svg.append(iobj);
            var svgHtml = window.btoa(unescape(encodeURIComponent($('<div>').append(svg.clone()).html())));

            ai.attr("src", 'data:image/svg+xml;base64,' + svgHtml);
        });
    };
}(jQuery));