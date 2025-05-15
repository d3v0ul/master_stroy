//send form
function send_form(obj) {
  var msg = $(obj).serialize();
  $.ajax({
      type: "POST",
      url: "send_form.php",
      data: msg,
      success: function(data) {
          alert("Сообщение отправлено");
      },
      error: function(xhr, str) {
          alert("Возникла ошибка!");
      }
  });
}





$(document).ready(function() { 

//modal
$('[data-modal=modal]').click(function(e) {
  e.preventDefault();
  var id = $(this).attr('data-pop');
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();
  $('.mask').css({'width':maskWidth,'height':maskHeight});
  $('.mask').fadeIn(0);
  var winH = $(window).height();
  var winW = $(window).width();
  $(id).css('top',  winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);
  $(id).fadeIn(200);
  $("body").css({"overflow":"hidden"});
});
$('.window .close, .mask').click(function (e) {
  e.preventDefault();
  $('.mask, .window').hide();
  $("body").css({"overflow":"auto"});
});



//phone mask
$(function($){
  if ($(".phone").length) {
    $(".phone").mask("+7 (999) 999-9999");
  }
});


//input file text change
$('.file-input').on('change', function () {
  if (this.files.length > 0) {
    $('.file-text').text('прикреплено'); // Меняем текст на "Прикреплено"
  } else {
    $('.file-text').text('прикрепить'); // Возвращаем текст "Загрузить", если файл не выбран
  }
});



//owl sliders
$('.brands_slider').addClass('owl-carousel');
$('.brands_slider').owlCarousel({
    center: false,
    items: 4,
    loop: false,    
    autoWidth: false,
    margin: 10,
    responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1200: {
          margin: 25,
        }
    }
});







});