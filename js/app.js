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
          pagination: '.swiper-pagination',
          paginationClickable: true
      });


var btns = $('.changeBar');
var bars = $('.progress-bar');
var allBars = $('.skillsBar');



  btns.on('mousemove', function(){
    var dataColor = $(this).data('color');
    var dataWidth = $(this).data('width');
    var dataNr = $(this).data('nr');
    $('#bar'+dataNr).find('span').removeClass().fadeIn(1000).addClass(dataColor).animate({width: dataWidth});

    btns.on('click', function(){
      $('#bar'+dataNr).find('span').animate({width:0});
    })
  });



  btns.on('mousemove', function(){
    $(this).toggle().addClass('.encion').css({"display": "inline-block" });
  });


var certificate = $('.skills3').find('img');
console.log(certificate);
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



      // var form = $('#contactForm');
      // console.log(form);
      // var name = $('#nameInput');
      // console.log(name);
      // var email = $('#emailInput');
      // console.log(email);
      // var message = $('#messageInput');
      // console.log(message);
      // var error = $('.error');
      // console.log(error);
      // var done = $('.done');

      // var submit = form.find('.submitbtn');
      // console.log(submit);
      // submit.on('click', function(){
      //   console.log('prześlij');
      //   if(name.val().length <= 5){
      //     event.preventDefault();
      //     error.text('Imię i nazwisko są zbyt krótkie.');
      //   }
      //   if(email.val().indexOf('@') == -1 || email.val().indexOf('.') == -1){
      //     event.preventDefault();
      //     error.text('E-mail jest niepoprawny.');
      //   }
      //   if(message.val().length < 10){
      //     event.preventDefault();
      //     error.text('Wiadomość nie zawiera conajmniej 10 znaków.');
      //   }
      // });

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
                                $form.replaceWith('<div class="form-send-success"><strong>Wiadomość została wysłana</strong><span>Dziękujemy za kontakt. Postaramy się odpowiedzieć jak najszybciej</span></div>');
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
