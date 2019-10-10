// Easing equation, borrowed from jQuery easing plugin
// http://gsgd.co.uk/sandbox/jquery/easing/
jQuery.easing.easeOutQuart = function (x, t, b, c, d) {
	return -c * ((t=t/d-1)*t*t*t - 1) + b;
};



jQuery(function( $ ){
var $news = $('#news-ticker');//we'll re use it a lot, so better save it to a var.
$news.serialScroll({
  items:'div',
  duration:2000,
  force:true,
  axis:'y',
  easing:'linear',
  lazy:true,// NOTE: it's set to true, meaning you can add/remove/reorder items and the changes are taken into account.
  interval:1, // yeah! I now added auto-scrolling
  step:2 // scroll 2 news each time
});
});
