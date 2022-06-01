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

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value)
	console.log(guess, typeof guess)

	if (!guess) {
		document.querySelector('.message').textContent = 'No number ⚠️⚠️⚠️⚠️⚠️⚠️'
	} else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'You win!🏆🏆🏆'
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Check Your Number buddy Too High 📈📈📈'
    } else if ( guess < secretNumber){
        document.querySelector('.message').textContent = 'Check Your Number buddy Too Low 📉📉📉'
    }
})

console.log(secretNumber);