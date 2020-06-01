
function init(){
  var winWidth =$(window).width()
  if (winWidth > 1024) {
     $('html').addClass('minTb').removeClass('mobile')
       $('.header_cont').css({
        position:'fixed',
        top:'120px', 
        width:'100%',
        zIndex:99999
       })
  } else {
     $('html').addClass('mobile').removeClass('minTb')
     $('.header_cont').removeClass('on')
     $('h1').css({
      position:'fixed',
      top:0, 
      width:'100%',
      zIndex:99999
    })
  }
}

$(window).resize(function(){  
  init()
})

$(window).load(function(){
  init()
})

$(window).scroll(function(){
  var qw = $(this).scrollTop()
if ($('html').hasClass('minTb')) {
  if(qw > 180){
    $('h1').css({
      position:'static'   
    })

    $('.header_cont').css({
       position:'fixed',
       top:'120px', 
       width:'100%',
       zIndex:99999
    }).delay(200).css({
      top:0
    })
  

  } else {
   $('.header_cont').css({
      position:'static'
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

$('.gallery>li>a').on('click',function(e){
  e.preventDefault();
  var top = $(this).parent().offset().top
  var href = $(this).attr('href')
  var src = $(this).attr('data-src')
  var alt = $(this).find('img').attr('alt')
 $('.popupBox').addClass('on')
 $('.popupBox .inner').css({
  top:top-200
})
 $('.popupBox .inner div a').attr('href',href)
 $('.popupBox .inner div img').attr('src',src).attr('alt',alt)
})

$('.popupBox button').on('click',function(){
   $(this).parents('.popupBox').removeClass('on')
})

