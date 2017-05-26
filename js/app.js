(function($){
  console.log('działa');

  var open = $('.openbtn');
  var sideNav = $('#mySidenav');
  var moduleContent = $('.module.content');
  var allBody = $('body');
  var close = $('.closebtn');
  var overlay = $('.overlay-content');
  var sendme = $('.sendme');


    open.on('click', function(){
      sideNav.css({
        "width": "250px",
      });
      moduleContent.css({
      /*  "margin-left": "0px", */
        "opacity" : "0.4",
      });
      open.css({
        "display" : "none",
      });
    });

    close.on('click',function(){
      sideNav.css({
        "width" : "0",
      });
      moduleContent.css({
        "margin-left" : "0",
        "opacity" : "1",
      });
      open.css({
        "display": "block",
      });
    });

  $.scrollTo(0);

  function showHide(){
    sideNav.css({
      "width" : "0",
    });
    moduleContent.css({
      "margin-left" : "0",
      "opacity" : "1",
    });
    open.css({
      "display": "block",
    });
  }

  $('.first').click(function() {
    $.scrollTo($('.skills2'),500); showHide();});
  $('.second').click(function() { $.scrollTo($('.skills1'),500); showHide()});
  $('.third').click(function() { $.scrollTo($('.skills3'),500);showHide()});
  $('.fourth').click(function() {$.scrollTo($('.hash'),500);showHide()});
  $('.mainName').click(function() { $.scrollTo($('.skills3'),1000);});
  $('.scrollup').click(function() { $.scrollTo($('body'),1000);});

  $(window).scroll(function(){
    if($(this).scrollTop()>300) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
  });

  $(window).scroll(function(){
    if($(this).scrollTop()>300) sendme.fadeIn();
    else sendme.fadeOut();
  });

  var hash = $('.icon-mail-alt');
  var newElement = $("<div class='newLink'> ernest.fichtner@gmail.com </div>");

  hash.on('click', function(){
    newElement.insertAfter(hash).toggle();
  });

  var swiper = new Swiper('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    pagination: '.swiper-pagination',
    paginationType: 'bullets',
    paginationClickable: true
  });

//STARE USTAWIENIE PROGRESS BAR NA EVENT MOUSEMOVE
var btns = $('.changeBar');
var bars = $('.progress-bar');
var allBars = $('.skillsBar');

 if (window.matchMedia("(min-width: 768px)").matches) {
/* the viewport is at least 400 pixels wide */
// const images = document.querySelectorAll('.slide-in');
// const showAfter = 120;
//
//     function scrollHappened() {
//       console.log('funkcja z JavaScript działa');
//       images.forEach(image => {
//         const screen = window.innerHeight;
//         const imageCenter = image.getBoundingClientRect().top + showAfter;
//         const imageBottom = image.getBoundingClientRect().bottom;
//
//         if (imageCenter < screen && imageBottom > 0)
//           image.classList.add('active');
//         else
//           image.classList.remove('active');
//       });
//     }
//
//     window.addEventListener('scroll', scrollHappened);
// scrollHappened();



function progresBarOnClick(){
   btns.on('mouseover', function(){
    var dataColor = $(this).data('color');
    var dataWidth = $(this).data('width');
    var dataNr = $(this).data('nr');
    $('#bar'+dataNr).find('span').removeClass().addClass(dataColor).animate({width: dataWidth},1000);

    btns.on('click', function(){
      $('#bar'+dataNr).find('span').removeClass(dataColor);
    })
   });
 }
 progresBarOnClick();
} else {
/* the viewport is less than 400 pixels wide */
  function progresBarOnClick(){
    btns.on('click', function(){
    var dataColor = $(this).data('color');
    var dataWidth = $(this).data('width');
    var dataNr = $(this).data('nr');
    var iconToResponsive = $('.iconToResponsive');
    var dataText = $(this).data('text');
    var textSpan = $('.foo');//$('#foo'+dataNr);
    var thisBar = $('.foo').show(1000);
    var c = $(this).find('.foo').show(1000).html(dataText).animate({opacity:'0.7',});
      console.log(c);
    $('#bar'+dataNr).find('span').removeClass().addClass(dataColor).animate({width: dataWidth},500);
      console.log(dataText);
  });
 }
 progresBarOnClick();
}


var certificate = $('.skills3').find('img');
console.log(certificate);

var clicked = false;

certificate.on('click', function(){
  clicked = true;
  if(clicked){
    certificate.toggleClass('cer');
    certificate.css({
      "cursor" : "zoom-in",
    });
  }else{
    certificate.css({
      "cursor" : "zoom-out",
    });
  }
});

// certificate.toggle(function(){
//   $(this).css({
//     "transform": "scale(1.35)",
//          "opacity": "0.7",
//   }),function(){
//     $(this).css({
//       "transform": "scale(1)",
//            "opacity": "1",
//     })
//   }
// })

    $(function() {
        var $inputs = $('form input[required], form textarea[required], select[required]');

        var displayFieldError = function($elem) {
            var $fieldRow = $elem.closest('.form-row');
            var $fieldError = $fieldRow.find('.field-error');
            if (!$fieldError.length) {
                var errorText = $elem.attr('data-error');
                var $divError = $('<div class="field-error">' + errorText + '</div>');
                $fieldRow.append($divError);
            }
        };

        var hideFieldError = function($elem) {
            var $fieldRow = $elem.closest('.form-row');
            var $fieldError = $fieldRow.find('.field-error');
            if ($fieldError.length) {
                $fieldError.remove();
            }
        };

        $inputs.on('input', function() {
            var $elem = $(this);
            if (!$elem.get(0).checkValidity()) {
                $elem.addClass('error');
            } else {
                $elem.removeClass('error');
                hideFieldError($elem);
            }
        });

        $inputs.filter(':checkbox').on('click', function() {
            var $elem = $(this);
            var $row = $(this).closest('.form-row');
            if ($elem.is(':checked')) {
                $elem.removeClass('error');
                hideFieldError($elem);
            } else {
                $elem.addClass('error');
            }
        });

        var checkFieldsErrors = function() {
            //ustawiamy zmienną na true. Następnie robimy pętlę po wszystkich polach
            //jeżeli któreś z pól jest błędne, przełączamy zmienną na false.
            var fieldsAreValid = true;
            $inputs.each(function(i, elem) {
                var $elem = $(elem);
                //if (new RegExp(pattern).test($elem.val())) {
                if (elem.checkValidity()) {
                    hideFieldError($elem);
                    $elem.removeClass('error');
                } else {
                    displayFieldError($elem);
                    $elem.addClass('error');
                    fieldsAreValid = false;
                }
            });
            return fieldsAreValid;
        };

        $('.form').on('submit', function(e) {
            e.preventDefault();

            var $form = $(this);

            if (checkFieldsErrors()) {
                var dataToSend = $form.serializeArray();
                dataToSend = dataToSend.concat(
                    $form.find('input:checkbox:not(:checked)').map(function() {
                        return {"name": this.name, "value": this.value}
                    }).get()
                );

                var $submit = $form.find(':submit');
                $submit.prop('disabled', 1);
                $submit.addClass('element-is-busy');

                $.ajax({
                    url : $form.attr('action'),
                    method: $form.attr('method'),
                    dataType : 'json',
                    data : dataToSend,
                    success: function(ret) {
                        if (ret.errors) {
                            ret.errors.map(function(el) {
                                return '[name="'+el+'"]'
                            });
                            checkFieldsErrors($form.find(ret.errors.join(',')));
                        } else {
                            if (ret.status=='ok') {
                                $form.replaceWith('<div class="form-send-success"><strong>Wiadomość została wysłana</strong><span>Dziękuję za kontakt. Postaram się odpowiedzieć jak najszybciej</span></div>');
                            }
                            if (ret.status=='error') {
                                $submit.after('<div class="send-error">Wysłanie wiadomości się nie powiodło</div>');
                            }
                        }
                    },
                    error : function() {
                        console.error('Wystąpił błąd z połączeniem');
                    },
                    complete: function() {
                        $submit.prop('disabled', 0);
                        $submit.removeClass('element-is-busy');
                    }
                });
            }
        })
    })
 })(jQuery);
