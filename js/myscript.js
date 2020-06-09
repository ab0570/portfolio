
function init(){
  var winWidth =$(window).width()
  var sct =$('body,html').scrollTop()
  if (winWidth > 1024) {
     $('html').addClass('minTb').removeClass('mobile')
     if(sct >=0 && sct < 120) {
       $('h1').css({position:'fixed',top:0, width:'100%', zIndex:9999})
      $('.header_cont').css({
        position:'fixed',
        top:'120px', 
        width:'100%',
        zIndex:99999
       })
     } else {
      $('h1').css({position:'static',top:0, width:'100%', zIndex:99999})
      $('.header_cont').css({
        position:'fixed',
        top:'0px', 
        width:'100%',
        zIndex:99999
       })
     }
  } else {
     $('html').addClass('mobile').removeClass('minTb')
     $('.header_cont').removeClass('on')
     $('h1').css({
      position:'fixed',
      top:0, 
      width:'100%',
      zIndex:99999
    })
  $('#header .openMOgnb').show()
  }
}

$(window).resize(function(){  
  init()
})

$(window).load(function(){
  init()
})
var qw;
$(window).scroll(function(){
 qw = $(this).scrollTop()
if ($('html').hasClass('minTb')) {
  if(qw > 120){
    $('h1').css({
      position:'static'   
    })
$('.header_cont').css({
       position:'fixed',
       top:'0px', 
       width:'100%',
       zIndex:99999
    })
    } else {
    $('h1').css({
      position:'fixed',
      top:'0px'
    })
   $('.header_cont').css({
     position:'fixed',
      top:'120px'
   })
  }
} else {
  $('.header_cont').removeClass('on')
  $('#header .closeMOgnb').hide()
  $('#header .openMOgnb').show().css({
    zIndex:999999
  })
  $('h1').css({
    position:'fixed',
    top:0, 
    width:'100%',
    zIndex:99999
  })
}
var top = $('.gallery').offset().top+$('.gallery').height()-700
if (qw >= top) {
  $('#about').addClass('on')
} else {
  $('#about').removeClass('on')
}
})

$('#header .openMOgnb').on('click',function(){
  $(this).next().addClass('on').css({
    position:'fixed',
    top:'120px', 
    width:'100%',
    zIndex:99999
 })
  $(this).hide()
  $('#header .closeMOgnb').show().css({
    zIndex:999999
  })
})

$('#header .closeMOgnb').on('click',function(){
  $(this).prev().removeClass('on')
  $(this).hide()
  $('#header .openMOgnb').show().css({
    zIndex:999999
  })
})

$('.depth1 > li').eq(2).on('click',function(){
   var sh = $('#shop').offset().top
   $('body,html').animate({scrollTop:sh},900)
})

$('.depth1 > li').eq(3).on('click',function(){
  var sh = $('#about').offset().top
  $('body,html').animate({scrollTop:sh},1100)

})

$('.depth1 > li').eq(0).on('click',function(){
  $('body,html').animate({scrollTop:'0px'},900)
})

var lieq, href, src, alt;
$('.gallery>li>a').on('click',function(e){
  e.preventDefault();
  // var top = $(this).parent().offset().top
  lieq = $(this).parent().index()
  href = $(this).attr('href')
  src = $(this).attr('data-src')
  alt = $(this).find('img').attr('alt')
 $('.popupBox').addClass('on')
 $('.popupBox .inner div a').attr('href',href)
 $('.popupBox .inner div img').attr('src',src).attr('alt',alt)
})

$('.popupBox .inner button.close').on('click',function(){
   $(this).parents('.popupBox').removeClass('on')
})

$('.popupBox .prev').on('click',function(){
   --lieq;
   if (lieq<0){
     lieq = 7;
   }
  href = $('.gallery > li').eq(lieq).find('a').attr('href')
  src = $('.gallery > li').eq(lieq).find('a').attr('data-src')
  alt = $('.gallery > li').eq(lieq).find('a').find('img').attr('alt')
  $('.popupBox .inner div a').attr('href',href)
  $('.popupBox .inner div img').attr('src',src).attr('alt',alt)
})

$('.popupBox .next').on('click',function(){
  ++lieq;
  if (lieq>7){
    lieq = 0;
  }
 href = $('.gallery > li').eq(lieq).find('a').attr('href')
 src = $('.gallery > li').eq(lieq).find('a').attr('data-src')
 alt = $('.gallery > li').eq(lieq).find('a').find('img').attr('alt')
 $('.popupBox .inner div a').attr('href',href)
 $('.popupBox .inner div img').attr('src',src).attr('alt',alt)
})

$('.visualRoll').slick({
  autoplay:true, //기본값  false
  autoplaySpeed:4500, // 슬라이드 지연시간
  dots:true, // 기본값 false,슬라이드 번호버튼
  speed:800, // 슬라이드 동작시간
  slidesToShow:1, //보여지는 슬라이드 수
  slidesToScroll:1, // 넘어가는 슬라이드수
  pauseOnHover:false, // 슬라이드위에 마우스오버시 슬라이드멈춤여부
  pauseOnDotsHover:true, // 슬라이드 번호버튼위에 마우스오버시 멈춤여부
  pauseOnFocus:false, // 번호버튼 클릭시 자동실행 멈춤여부
  cssEase:'linear', // 슬라이드 움직임에 대한 가속도 함수값
  draggable:true, // 마우스드래그했을때 움직임 여부
  fade:false, //true면 fadein,out 효과가 적용됌.
  arrows:true, // 기본값은 true고, 슬라이즈 좌우측 방향버튼
  prevArrow: '<button class="prevArrow marrow"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button class="nextArrow marrow"><i class="fas fa-angle-right"></i></button>',
  
})

$('.plpa').toggle(
  function(){
     $(".visualRoll").slick("slickPause")
     $(this).find('i').removeClass('fa-pause').addClass('fa-play')
  },
  function(){
     $(".visualRoll").slick("slickPlay")
     $(this).find('i').removeClass('fa-play').addClass('fa-pause')
  }
)

$(window).scroll(function(){
 var top = $(this).scrollTop()
 if (top > 100) {
   $('.top').addClass('on')
 } else {
   $('.top').removeClass('on')
 }
})

$('.top').on('click',function(){
  $('body,html').animate({
    scrollTop:0
  },800)
})