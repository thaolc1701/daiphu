var general = {

};

var home = {
  homeCarousel: function(){
    $('.home-carousel').owlCarousel({
      loop:true,
      margin: 0,
      nav:false,
      items: 1,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true
    })
  },
  homeInfoCarousel: function(){
    $('.home-info-carousel').owlCarousel({
      loop:true,
      margin: 0,
      nav:true,
      items: 1,
      dots: false
    })
  }
};

$(document).ready(function() {
	home.homeCarousel();
  home.homeInfoCarousel();
});