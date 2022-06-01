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

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;



document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value)



    // When is no input 
	if (!guess) {
		document.querySelector('.message').textContent = 'Choose a number between 1 and 20 ⚠️⚠️⚠️⚠️⚠️⚠️'

        // When Player wins the game
	} else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'You win!🏆🏆🏆';
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        // When the number is too high 
    } else if (guess > secretNumber) {
        if(score > 1) {
        document.querySelector('.message').textContent = 'Check Your Number buddy Too High 📈📈📈';
        document.querySelector('body').style.backgroundColor = '#990000';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent ='You Lose the Game📉🤷‍♂️🫡🥺 ';
            document.querySelector('.score').textContent = 0;
        }

        // When the number is too low 
    } else if ( guess < secretNumber){
        if (score > 1) {
		document.querySelector('.message').textContent ='Check Your Number buddy Too Low 📉📉📉';
        document.querySelector('body').style.backgroundColor = '#990000';
		score--;
		document.querySelector('.score').textContent = score;
		} else {
		document.querySelector('.message').textContent ='You Lose the Game📉🤷‍♂️🫡🥺';
		document.querySelector('.score').textContent = 0;
				}
    } 
})


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Star guessing....';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'

})