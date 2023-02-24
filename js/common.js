$(function(){
  $(window).scroll(function(event){
    var top = $(window).scrollTop(); //스크롤바가 내려간 거리를 얻어온다. 
    console.log(top);

    if(top>=500){
      $('#subPage').css('background','rgb(29,0,51');
    } else{ $('#subPage').css('background','rgba(29,0,51,0.7');}
  });
    
    $(function(event){
      $('.trigger').on('click', function(event) {
          //웹 브라우저에서 지원하는 기본 기능을 제거
          event.preventDefault();

          //#trigger에 사용자의 이벤트인 click인 적용된 상태를 'this'라고 한다.
          $(this).toggleClass('active');
          $('#main-menu').toggleClass('active');
          $('body').toggleClass('active');
          $('#trigger2').toggleClass('active');
          $('.white').toggleClass('active');
          $('.subbox').toggleClass('active');
      });
       
      $('#trigger2').on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('active');
          $('#main-menu').toggleClass('active');
          $('body').toggleClass('active');
          $('.trigger').toggleClass('active');
          $('.white').toggleClass('active');
          $('.subbox').toggleClass('active');
      });
      
      $('#main-menu li').on('mouseenter',function(event){
        $(this).find('.sub-menu').stop().slideDown();
        var idx = $('#main-menu li').index(this);
        console.log(idx);
        if(idx == 0 ){
          $('.subbox > .bg-pro').css('opacity',1);
        } else if (idx>=3 && idx<6){
          $('.subbox > .bg-pa').css('opacity',1);
        }else if (idx>=6 && idx<9){
          $('.subbox > .bg-sea').css('opacity',1);
        }else if (9<=idx){
          $('.subbox > .bg-sto').css('opacity',1);
        }
      });
      $('#main-menu li').on('mouseleave',function(event){
        $(this).find('.sub-menu').stop().slideUp();
        var idx = $('#main-menu li').index(this);
        if(idx == 0){
          $('.subbox >.bg-pro').css('opacity',0);
        } else if (idx>=3 && idx<6){
          $('.subbox >.bg-pa').css('opacity',0);
        }else if (idx>=6 && idx<9){
          $('.subbox >.bg-sea').css('opacity',0);
        } else if (9<=idx){
          $('.subbox >.bg-sto').css('opacity',0);
        }
      });
      });


});
