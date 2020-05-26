function init(){
  var winWidth =$(window).width()
  if (winWidth > 1024) {
     $('html').addClass('minTb').removeClass('mobile')
  } else {
     $('html').addClass('mobile').removeClass('minTb')
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
  if(qw > 120){
    $('.header_cont').css({
       position:'fixed',
       top:0, 
       width:'100%',
       zIndex:99999
    })
  } else {
   $('.header_cont').css({
      position:'fixed',
      top:'120px',
      zIndex:999999,
      width:'100%'
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
  $(this).next().addClass('on')
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
   $('body,html').animate({scrollTop:sh},600)
})

$('.depth1 > li').eq(3).on('click',function(){
  var sh = $('#about').offset().top
  $('body,html').animate({scrollTop:sh},600)
})

