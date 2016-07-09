var general = {
  initBoxServiceCarousel: function(){
    $('.box-service-carousel').owlCarousel({
      loop:true,
      margin: 0,
      nav:true,
      items: 1,
      dots: false
    })
  }
};

var home = {
  initHomeCarousel: function(){
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
  initHomeInfoCarousel: function(){
    $('.home-info-carousel').owlCarousel({
      loop:true,
      margin: 0,
      nav:true,
      items: 1,
      dots: false
    })
  },
  initHomeServiceCarousel: function(){
    $('.home-service-carousel').owlCarousel({
      loop:true,
      margin: 30,
      nav:false,
      items: 4,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true
    })
  },
  initHomeProjectCarousel: function(){
    $('.home-project-carousel').owlCarousel({
      loop:true,
      margin: 30,
      nav:true,
      items: 3,
      dots: false
    })
  },
  initHomePartnerCarousel: function(){
    $('.home-partner-carousel').owlCarousel({
      loop:true,
      margin: 0,
      nav:true,
      items: 4,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      dots: false
    })
  }
};

var product = {
  scrollCompany: function(){
    (function($){
      $(window).on("load",function(){
        $(".company").mCustomScrollbar();
      });
    })(jQuery);
  }
}

$(document).ready(function() {
	home.initHomeCarousel();
  home.initHomeInfoCarousel();
  home.initHomeServiceCarousel();
  home.initHomeProjectCarousel();
  home.initHomePartnerCarousel();

  general.initBoxServiceCarousel();

  product.scrollCompany();

  var sync1 = $(".slider");
  var sync2 = $(".thumbnails");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items : slidesPerPage,
      dots: false,
      nav: false,
      smartSpeed: 200,
      slideSpeed : 500,
      margin: 10,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate : 100
    }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);

    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});