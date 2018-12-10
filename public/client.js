// client-side js
// @author: Ido Green | greenido.wordpress.com | @greenido
// @Update: Dec 2018
//
//
$(function() {
  console.log("== Start the JS ==");
  let height = $(window).height() / 2 + 40;
  $('.dialogdlow').css('height', height + 'px');
  
  //var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i)
  
  $.get( "/snow/", function( data ) {
    //console.log( "Got: " + data );
    $("#snowInfo").html("<h2>" + data + "</h2>");
  });
});
