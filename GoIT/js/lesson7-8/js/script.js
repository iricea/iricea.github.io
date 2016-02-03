$(function(){
  var $tabButtons = $('.tab');
  var $tabContent = $('.tab-content');

  $tabButtons.on('click', switchTab);
  
  function switchTab(e) {
    var index = $(this).index();
    console.log('this', this);
    console.log('index', index);

    $tabContent.hide();
    $tabContent.eq(index).show();
  }

  $tabContent.first().show();
});
