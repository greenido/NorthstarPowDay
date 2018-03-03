// client-side js
// @author: Ido Green | greenido.wordpress.com | @greenido
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log("== Start the JS ==");
  let height = $(window).height() / 2 + 40;
  $('.dialogdlow').css('height', height + 'px');
  
  //var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
  
});
