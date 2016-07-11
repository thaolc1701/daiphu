var general = {
  initBoxServiceCarousel: function(){
    $('.box-service-carousel').owlCarousel({
      loop:true,
      margin: 0,
      nav:true,
      items: 1,
      dots: false
    })
  },
  showAndHideShoppingCart: function(){
    $('.shopping-cart-button').hover(function(){
      $(this).children('.shopping-cart').fadeIn('fast');
    }, function () {
      $(this).children('.shopping-cart').fadeOut('fast');
    });
  },
  showBoxSearch: function(){
    $('.btn-search').click(function(){

      return false;
    })
  },
  hideBoxSearch: function(){
    $('.search .close').click(function () {

      return false;
    });
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

      // slideSpeed : 300,
      // paginationSpeed : 400,
      // singleItem : true
    })
  },
  initHomeInfoCarousel: function(){
    $('.home-info-carousel').owlCarousel({
      loop:true,
      margin: 0,
      nav:true,
      items: 1,
      dots: false

      // items: 1,
      // navigation : true,
      // pagination: false
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

      // items: 4
    })
  },
  initHomeProjectCarousel: function(){
    $('.home-project-carousel').owlCarousel({
      loop:true,
      margin: 30,
      nav:true,
      items: 3,
      dots: false

      // items: 3,
      // navigation : true,
      // pagination: false
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

      // items: 4,
      // navigation : true,
      // pagination: false
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

var product_details = {
  initOtherProductsCarousel: function(){
    $('.other-products-carousel').owlCarousel({
      loop:true,
      margin: 30,
      nav:false,
      items: 3,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true

      // items: 3
    })
  }
}

$(document).ready(function() {
	home.initHomeCarousel();
  home.initHomeInfoCarousel();
  home.initHomeServiceCarousel();
  home.initHomeProjectCarousel();
  home.initHomePartnerCarousel();

  general.initBoxServiceCarousel();
  general.showAndHideShoppingCart();
  general.showBoxSearch();
  general.hideBoxSearch();

  product.scrollCompany();

  product_details.initOtherProductsCarousel();
});