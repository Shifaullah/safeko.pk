
 var swiper = new Swiper('.swiper-container', {
      spaceBetween: 25,
        slidesPerView: swiper(),
      centeredSlides: true,
        loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
function swiper() {
  w = window.innerWidth;
  if(w >= 992){ return 3}
  else if(w <= 991 && w > 510){ return 2}
    else{return 1;}
}
