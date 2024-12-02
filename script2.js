const input = document.querySelector('input')
const error = document.querySelector('.error')
const answer = document.querySelector('.answer')
const ball = document.querySelector('img')

const arrayAnswer = [
	'Nie',
	'Tak',
	'Nie chcesz znać odpowiedzi na to pytanie... :/',
	'Być może',
	'Zapytaj ponownie później',
	'Jest na to duża szansa',
	'Może',
	'Jeszcze nie teraz',
	'W niedalekiej przyszłości',
	'Nie ma takiej opcji',
]

const randomAnswer = () => {
	const number = Math.floor(Math.random() * arrayAnswer.length)
	answer.innerHTML = `<span>Odpowiedź:</span> ${arrayAnswer[number]}`
}

const anime = () => {
	ball.classList.add('shake-animation')
}

const checkQuest = () => {
	ball.classList.remove('shake-animation')
	if (input.value === '') {
		error.textContent = 'Wpisz swoje pytanie'
		answer.innerHTML = ''
	} else if (input.value.slice(-1) === '?') {
		randomAnswer()
		error.textContent = ''
	} else {
		error.textContent = 'Pytanie musi być zakończone pytajnikiem'
		answer.innerHTML = ''
	}
}

ball.addEventListener('click', anime)
ball.addEventListener('animationend', checkQuest)
