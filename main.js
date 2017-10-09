$(document).ready(function(){

  var squares;
  var images= ['moon.gif','circle.gif','square.gif','heart.gif','oval.gif','parallelogram.gif','polygon.gif','rectangle.gif','cross.gif','star.gif','triangle.gif','drop.gif','moon.gif','circle.gif','square.gif','heart.gif','oval.gif','parallelogram.gif','polygon.gif','rectangle.gif','cross.gif','star.gif','triangle.gif','drop.gif'];
  var tempSrc = 0;
  squares = $('.squares');
  var count=0;

//randomize (shuffle)
  function ShuffleImages(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

  // Sets all images
  function populate(){
  for (i=0; i < images.length; i++){
    $(squares[i]).find('img').attr('src', "new_pictures/"+images[i]);
    // $("img").hide();
    }
  }
  populate();

  
  $('.squares').click(function() {
    $img = $(this).find("img");
  
  // prevents stuff from happenning after "match" has been made
   if($img.hasClass("match")===true){
    return;
   }


   $img.show();

    //second click
    if(tempSrc != 0){
    
    //prevents stuff from happenning to a square after that square has been clicked
    
     if($img.hasClass("active")===true){
      return;
    }


    $img.addClass('active');
    

      if(tempSrc==$img.attr("src")){//matching second click
      //win
      $('.active').addClass("match").removeClass('active');
      $("#box").text("Yey!");

      //win at the end of the game
      count++;

      if(count==12){$("#box").text("Great Success!");}

        console.log('bingo!');
        tempSrc = 0;

        
      } else {
        //second click=wrong
        $("#box").text("Try again!");
        tempSrc = 0;
        $('.active').fadeOut(1000).removeClass('active');

        console.log("reset");
      }
      
      } else {
      //first click 
       tempSrc=$img.attr("src");
       
       $img.addClass('active');
       
    }

   // $(this).find("img").addClass('active');
  });
 

 function ResetGame() {
  
  squares.find('img').hide();
  $('#box').html('');
  ShuffleImages(images);
  $('.active').removeClass('active');
  $(".match").removeClass("match");
  tempSrc = 0;
  count=0;

  populate();
}


  $('.button').on('click', function(){
    ResetGame();
  });

 });


  



