$(function(){
  $('.tab-btn').click(function(){
    var index = $('.tab-btn').index($(this));

    $('.active').removeClass('active');

    $('.tab-panel').eq(index).addClass('active');
  })
})