(function($){
  console.log('działa');

  var open = $('.openbtn');
  var sideNav = $('#mySidenav');
  var moduleContent = $('.module.content');
  var allBody = $('body');
  var close = $('.closebtn');

  open.on('click', function(){
    sideNav.css({
      "width": "250px",
    });
    moduleContent.css({
      "margin-left": "250px",
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

  

 })(jQuery);
