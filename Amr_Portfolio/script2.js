
$(document).ready(function(){
/*$("html").mousemove(function(e){
$(".skillBar").text("X-Axis" +e.pageX + "Y-axis" + e.pageY);
});*/

$(".html").animate({width : "90%"} , 2000);
$(".css").animate({width : "80%"} , 2000);
$(".SCSS").animate({width : "70%"} , 2000);
$(".JQUERY").animate({width : "65%"} , 2000);
$(".js").animate({width : "65%"} , 2000);
$(".ang").animate({width : "75%"} , 2000);
$(".BootStrap").animate({width : "70%"} , 2000);
$(".sql").animate({width : "75%"} , 2000);
$(".php").animate({width : "80%"} , 2000);
$(".laravel").animate({width : "60%"} , 2000);


    $("#myPhoto").on("mouseenter" ,function(){$(this).html("<img src='images/happy.jpg' style='float:left;width:200px;height:200;border-radius: 50%;' alt='OOps...'>" )});
    $("#myPhoto").on("mouseleave" ,function(){$(this).html("<img src='images/Amr.jpg' style='float:left;width:200px;height:200;border: 2px solid #F7BC73; border-radius: 50%;' alt='OOps...'>" );});
  
    $("#drop").on("click" , function(){

        $("#header").fadeToggle(500);
    }) 
    
});


