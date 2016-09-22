$(document).ready(function(){
  var nav=$("nav#navbar");
  var $window=$(window);
  var backToTop=$("div.back-to-top");
  
  $window.scroll(function(event){
    backToTop.css('display','block');

    if(!nav.hasClass('box-shadow')){
      nav.addClass('box-shadow');
    }
    if(!nav.hasClass('fixed-nav')){
      nav.addClass('fixed-nav');
    }
    
    if($window.scrollTop()===0){
      nav.removeClass('box-shadow');
      nav.removeClass('fixed-nav');
      backToTop.css('display','none');
    }
  });

  backToTop.click(function(){
    $('html,body').animate(
      {
        scrollTop:'0'
      },
    800);
  });
}); 
