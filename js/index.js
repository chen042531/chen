$(window).mousemove(function(evt){
  var x = evt.pageX;
  var y = evt.pageY;
  console.log(x);
  
  $("#cross").css("left",x+"px");
  $("#cross").css("top",y+"px");
  
  
  if (x<$(window).width()/2 - 50){
    $("#cat").attr("src","http://i.imgur.com/JgowxlA.png");
  }else if (x>$(window).width()/2 + 50){
    $("#cat").attr("src","http://i.imgur.com/JgowxlA.png");
  }else{
    $("#cat").attr("src","http://i.imgur.com/JPvYEEK.png");
  }
  if (x<$(window).width()/2 - 50 && y<$(window).height()/2){
    $("#cat").attr("src","http://i.imgur.com/GDAGoGi.png");
  }
  if (x>$(window).width()/2 + 50 && y<$(window).height()/2){
    $("#cat").attr("src","http://i.imgur.com/GDAGoGi.png");
  }
  
  
});




$(".ball").click(function(){
  var score;
  $(".scoreBoard").text(score+1);
  
});
$(window).html("<div class='ball'></div>");
$(".ball").addClass("ball");


$(".ball").addClass("ball");
var x = Math.floor(Math.random()*$(window).width());
var y = Math.floor(Math.random()*$(window).height());
var score=1;
setInterval(function(){
  $(".bigblock").append("<div class='ball'></div>");
  $(".ball").addClass("ball");
  var x = Math.floor(Math.random()*$(window).width())-5;
  var y = Math.floor(Math.random()*$(window).height())-5;
  $(".ball").css("top", x);
  $(".ball").css("left",y);
  $(".ball").click(function(){

    $(".scoreBoard").text(score+=1);
    
  });
 if(score>5){
        $(window).html("<div class='back'></div>");
        $(".back").addClass("back");
        console.log("kk")
     } 
},1000);