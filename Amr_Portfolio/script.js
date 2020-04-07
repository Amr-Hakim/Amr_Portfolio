let i = 0;
let txt = '  Hi. I\'m Amr Abd-ElHakim,  32 years old, living in Giza-Dokki. I\'m graduated from faculty of Commerce in Cairo University. ';

let speed =100;
 function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } 

  } 
//***************************************************************************************************
let x=0;
  let time =3000 ;
  let img =[x];
  img[0]='images/hotel1.png';
  img[1]='images/hotel2.png';
  img[2]='images/hotel3.png';
  img[3]='images/car1.png';
  img[4]='images/car2.png';
  function changeImg(){
    document.slide.src=img[x];
    if(x<img.length-1){
      x++;
    }else{
     x=0;
    }
    setTimeout("changeImg()",time);
  }
 window.onload = changeImg;
$(document).ready(function(){
  $(".bracket1 , .bracket2").on("mouseover" ,function(){
    $(this).css( {width:"80px" , height:"80px" , opacity : "0.6"})
  });
  $(".bracket1 ,.bracket2").on("mouseleave" ,function(){
    $(this).css( {width:"80px" , height:"80px" , opacity : "0.8"})
  });
  
$(".bracket1").on("click",function(){
  $("#slide").fadeOut(600).fadeIn(700);
})
$(".bracket2").on("click",function(){
  $("#slide").fadeOut(500).fadeIn(600);
})

});
 /********************************************************************************************* */
 