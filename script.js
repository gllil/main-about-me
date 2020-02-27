var instance = M.Carousel.init({
    fullWidth: true
  });

$(document).ready(function(){
    M.AutoInit();
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
  });



