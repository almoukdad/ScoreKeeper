
// Firstly selecting
var p1Button = document.querySelector('#p1');
var p2Button = document.querySelector('#p2');
var p1Display = document.getElementById("p1Score");	
	// i dont need to use # because i mention that its an ID
var p2Display = document.getElementById("p2Score");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector('input');
var winningScoreDisplay= document.querySelector('p span');
var counter1 = 0;		
var counter2 = 0; 
	// I use two counter because when counter called it will be incrumenting every time !!!
var gameOver = false;
var winScore = 5;

// Second miupulating
p1Button.addEventListener('click',function(){
	if(!gameOver){
		counter1++;
		if(counter1===winScore){
		p1Score.classList.add("winner");
		// when this condition happened add class make it ture to stop counting
		gameOver = true;	
		}
		// updateing into a new value
		p1Display.textContent=counter1; 
	}
});
p2Button.addEventListener('click',function(){
	if(!gameOver){
		counter2++;
		if(counter2===winScore){
		p2Score.classList.add("winner");
		gameOver = true;
		}
		p2Display.textContent=counter2;
	}
});
resetButton.addEventListener('click',function(){
	reset();
});
	// I want to make all previous values equal to zero  
function reset(){
	counter1 = 0;
	counter2 = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Score.classList.remove("winner");
	p2Score.classList.remove("winner");
	gameOver = false;		
}
	// very important to know that the program until now understand that game is over ,
	// I tell the program to start again the game 


numInput.addEventListener('change',function(){
	winningScoreDisplay.textContent = this.value;
	// this keyword reffering to the left dot of (event)
	winScore = Number(this.value);
	// (Number) is change the type of value to number
	// without this it connat stop the counter because the interpretor cannt unerstand the value as a number !!
	reset();
});

