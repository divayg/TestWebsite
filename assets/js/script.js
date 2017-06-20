$(document).ready(function(){

(function($) {

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var cards = $(".slide-in");

cards.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  cards.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide_in"); 
    } 

  });
  
});



var cards_rotate = $(".rotate-y");



cards_rotate.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible-rotate"); 
  } 
});

win.scroll(function(event) {
  
  cards_rotate.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("rotate"); 
    } 

  });
  
});

var cards_right = $(".slide-in-right");



cards_right.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible-right"); 
  } 
});

win.scroll(function(event) {
  
  cards_right.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slide_in_right"); 
    } 

  });
  
});

});