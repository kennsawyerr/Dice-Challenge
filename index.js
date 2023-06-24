 const randomNumber1 = Math.floor(Math.random( ) * 6)+ 1;
 const randomNumber2 = Math.floor(Math.random( ) * 6)+ 1;
 const h1=document.querySelector("h1");
 const Img1 =document.querySelectorAll(".img1");//select all image tags
 console.log(Img1)//loop over all of them
 //then change their img to this random img
 for (var i = 0; i < Img1.length; i++) {
   
    Img1[i].setAttribute("src",`./images/dice${randomNumber1}.png`)
  }

  const Img2 =document.querySelectorAll(".img2");//select all image tags
 console.log(Img1)//loop over all of them
 //then change their img to this random img
 for (var i = 0; i < Img1.length; i++) {
   
    Img2[i].setAttribute("src",`./images/dice${randomNumber2}.png`)
  }
  if (randomNumber1>randomNumber2){h1.innerHTML="Player 1 wins"}
  else if(randomNumber1< randomNumber2){h1.innerHTML="Player 2 wins" }
  else {h1.innerHTML="Its a draw"}
//    Hint: You'll need to use an if statement, querySelector() and the innerHTML property to change the text in the h1.
 
 