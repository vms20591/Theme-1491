$(document).ready(function(){
  var nav=$("nav#navbar");
  var $window=$(window);
  
  $window.scroll(function(event){
    if(!nav.hasClass('box-shadow')){
      nav.addClass('box-shadow');
    }
    if(!nav.hasClass('fixed-nav')){
      nav.addClass('fixed-nav');
    }
    
    if($window.scrollTop()===0){
      nav.removeClass('box-shadow');
      nav.removeClass('fixed-nav');
    }
  });
}); 
