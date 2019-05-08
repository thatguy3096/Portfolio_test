$(function(){
  $('.demo').unslider({
    autoplay: false,
    delay: 3000,
    speed: 750,
    easing: 'swing',
    keys:{
      prev: 37,
      next: 39
    },
    nav: true,
    arrows: {
      prev: '<a class="' + self._ + '-arrow prev"></a>',
      next: '<a class="' + self._ + '-arrow next"></a>'
    },
    animations: 'horizontal',
    selectors: {
      container: 'ul:first',
      slides: 'li'
    },
    animateHeight: false,
    activeClass: self._ + '-active',
    swipe: true
  });
});