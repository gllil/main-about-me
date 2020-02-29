// var instance = M.Carousel.init({
//     fullWidth: true
//   });
  

$(document).ready(function(){
    M.AutoInit();
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
    instances
    $('.sidenav').sidenav();
    // $('.carousel').carousel();
    // $('.carousel.carousel-slider').carousel({
    //     fullWidth: true,
    //     indicators: true
    //   });
    
    $('#textarea1').val('New Text');
    M.textareaAutoResize($('#textarea1'));
  });





