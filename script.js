'use strict'

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 12;

console.log(document.querySelector('.guess').value);

*/

// Initial State of Game 
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;




const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const displayNumber = function (number) {
    document.querySelector('.number').textContent = number;
}

const displayScore = function(content) {
    document.querySelector('.score').textContent = content;
}

const displayHighScore = function(content) {
    document.querySelector('.highscore').textContent = content;
}

document.querySelector('.check').addEventListener('click', function (event) {
     // Prevent the page to refresh when interact with it 
     event.preventDefault();

	const guess = Number(document.querySelector('.guess').value)
	
	// When is no input
	if (!guess) {
		displayMessage('Choose a number between 1 and 20 ⚠️⚠️⚠️⚠️⚠️⚠️')

		// When Player wins the game
	} else if (guess === secretNumber) {
		displayMessage('You win!🏆🏆🏆');
		displayNumber(secretNumber);
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

        // Player High Score
        if (score > highScore) {
            highScore = score;
            displayHighScore(highScore);
        }
	} else if (guess !== secretNumber) {
		// When the number is too high or low
		if (score > 1) {
			displayMessage(
				guess > secretNumber
					? ' Your Number is Too High !!!📈📈📈 Try again!!!'
					: 'Your Number is Too Low 📉📉📉 Try again !!!'
			);
			score--;
			displayScore(score);
		} else {
			displayMessage('You Lose the Game📉🤷‍♂️🫡🥺');
			document.querySelector('body').style.backgroundColor = '#990000';
			displayScore(0);
		}
	}
})

// Reset Game to Initial State 
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Star guessing....');
    displayScore(score);
    displayNumber('?');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'

})