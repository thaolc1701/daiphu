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
    });
  }
};

var product = {
  scrollCompany: function(){
    (function($){
      $(window).on("load",function(){
        $(".company").mCustomScrollbar();
      });
    })(jQuery);
  },
  initSliderPrice: function(){
    // Slider with fixed minimum
    $("#slider-price").slider({
        range: true,
        step: 500000,
        value: 0,
        min: 0,
        max: 15000000,
        values: [0, 5000000],
        slide: function(event, ui) {
          $("#min-price").text(ui.values[0] + " đ");
          $("#max-price").text(ui.values[1] + " đ");
        }
    });

    $("#min-price").text($("#slider-price").slider("values", 0) + " đ");
    $("#max-price").text($("#slider-price").slider("values", 1) + " đ");
  },
  initSliderPH: function(){
    // Slider with fixed minimum
    $("#slider-ph").slider({
        range: true,
        value: 0,
        step: 1,
        min: 1,
        max: 5,
        values: [1, 2],
        slide: function(event, ui) {
          $("#min-ph").text(ui.values[0] + " PH");
          $("#max-ph").text(ui.values[1] + " PH");
        }
    });

    $("#min-ph").text($("#slider-ph").slider("values", 0) + " PH");
    $("#max-ph").text($("#slider-ph").slider("values", 1) + " PH");
  }
};

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
  product.initSliderPrice();
  product.initSliderPH();

  product_details.initOtherProductsCarousel();
});