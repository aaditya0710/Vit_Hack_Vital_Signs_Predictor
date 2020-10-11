$(document).ready(function(){
  $(".btn").click(function(){      /*button click event*/
    $(".upload").toggle();
    $(".new").delay(1000).fadeToggle();                /*new class calling */
  });
});