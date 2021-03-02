$( document ).ready(function() {
    $('#Q1').toggleClass('hidden');
});

$('#button1').click(function(){
  $('#p1').toggleClass('reveal1');
  $('#Q2').toggleClass('hidden');
});
$('#button2').click(function(){
  $('#p2').toggleClass('reveal2');
});
