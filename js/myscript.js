$(window).scroll(function(){
  var qw = $(this).scrollTop()
  if(qw > 120){
    $('.header_cont').css({
       position:'fixed',
       top:0, 
       width:'100%',
       zIndex:99999
    })
  } else {
   $('.header_cont').css({
      position:'static'
   })
  }
})

$('#header .openMOgnb').on('click',function(){
  $(this).next().addClass('on')
  $(this).hide()
  $('#header .closeMOgnb').show()
})

$('#header .closeMOgnb').on('click',function(){
  $(this).prev().removeClass('on')
  $(this).hide()
  $('#header .openMOgnb').show()
})