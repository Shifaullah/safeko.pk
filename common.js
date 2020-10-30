// pre loader
setTimeout(function() {
  $('.loader').css({
    opacity : '0',
    visibility : 'hidden'
  });
  
  setTimeout(function() {
    $('.loader').css('display','none');
  },500);
},2000);

// slide to top button
$(document).scroll(function() {
  if(scrollY > (window.innerHeight + 50)){
    $('.slidetotop').css('bottom','20px');
  }else{
    $('.slidetotop').css('bottom','100%');
  }
});


document.body.onload = function() {
  document.querySelector('.sliderZoom').classList.add('anime');
}