(function ($) {


})(jQuery);

(function ($) {

})(jQuery);

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

(function ($) {

  var watchHeaderResize = function () {
    $('.header-buffer').height($('header').height());
  };

  var watchFooterResize = function () {
    $('.footer-buffer').height($('footer').height());
  };

  $(document).ready(function () {
    watchHeaderResize();
    watchFooterResize();

    $(window).resize(function () {
      watchHeaderResize();
      watchFooterResize();
    });

  });


})(jQuery);
