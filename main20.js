
var numberOfWon=0;
var numberOfLost=0;
for(var i=1; i<=5; i++){
   var guesNumber = parseInt(prompt("Enter your guess number : "));
   var randomNumber = Math.floor(Math.random()*5+1);
   if (guesNumber==randomNumber) {
      document.write("You have won "+"<br/>");
      numberOfWon++;
   
   }
   
   else{
      document.write("You have lost .And the random number is : "+randomNumber+"<br/>");
      numberOfLost++;
   }
}

document.write("Total Number of won : "+ numberOfWon +"<br/>");
document.write("And total Number of won : "+ numberOfLost +"<br/>");