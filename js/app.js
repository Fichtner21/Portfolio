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
        })
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
        })
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

 })(jQuery);
