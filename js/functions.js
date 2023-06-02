$(document).ready(function () {
    $("#about-us,#about-sub-menu").mouseenter(function () {
        $("#about-sub-menu").css("display", "block");
    });
    $("#about-sub-menu").mouseleave(function(){
        $("#about-sub-menu").css("display", "none");
      });
      $(".outter").mouseenter(function(){
        $("#about-sub-menu").css("display", "none");
      });


});