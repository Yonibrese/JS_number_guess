let userNum=0;
let compNum=0;
let x = 0; 
function playGame() {
	 x =confirm("are you sure?");
	 if(x==true){
	 	userNum = parseInt(prompt("pick a number between 1 and 10"));
		if (userNum <= 0 || userNum > 10){
			 alert("sorry its not a good number");
		}
		else if (userNum > 0 && userNum < 10){
			 compNum = Math.floor((Math.random() * 10) + 1);
			test()
		}
		else{
			alert("this is not a number, good-bye");
		}
	 }
	 else{
	 	alert("No Porblem, good-bye")
	 }
}


var i =0;
function test () {
	for (var i = 0; i < 2; i++) {
		if(userNum === compNum){
			alert("you have won the game");
		break;
		}
		else if(userNum > compNum){
			userNum = prompt(" your number is too high please guess again");
		}
		else {
			userNum = prompt("your number is too low please guess again");
		}	
	}if(userNum !== compNum){
		alert("you lost. " + compNum +" was the number" );
	}

	}


