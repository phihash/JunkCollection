$(function(){

  $(document).on("click", ".tab-btn", function() {
    // clickイベントの処理
    var index = $('.tab-btn').index($(this));

    $('.active').removeClass('active');

    $('.tab-panel').eq(index).addClass('active');
  });

})