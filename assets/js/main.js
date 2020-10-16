$(function() {
	
// Wow Js Init
new WOW().init();

// HERO SLIDE SHOW 
$(".hero-slideshow").each(function(){
  let SlideBG = $(this).find('.slide-inner');
  SlideBG.each(function() {
    let BG = $(this).attr('data-src');
    $(this).css('background-image', 'url('+BG+')');
  }); 
  let BGSLIDE = new Swiper('.hero-slideshow', { 
    loop: true, 
    speed: 1000,
    grabCursor: false, 
    watchSlidesProgress: true,
    mousewheelControl: false,
    keyboardControl: false, 
    parallax: true,
	effect: 'fade', 
	autoplay: 1500, 
  });  
});



});