const submitBtn = document.querySelector('.submit-btn')
const rates = document.querySelectorAll('.card__rating-rate-div-number')
const span = document.querySelector('.rating')
const ratingState = document.querySelector('.card__rating')
const thankState = document.querySelector('.card__thank')
const error = document.querySelector('.error')
let currentRate = ''

rates.forEach(rate => {
	rate.addEventListener('click', e => {
		rates.forEach(rate => {
			rate.classList.remove('focus')
		})
		e.target.classList.add('focus')
		currentRate = e.target.textContent
		console.log(currentRate)
	})
})

const sendRating = () => {
	if (currentRate !== '') {
		ratingState.classList.add('hide')
		thankState.classList.remove('hide')
		span.textContent = currentRate
	} else {
		error.textContent = 'Please select your rating!'
	}
}

submitBtn.addEventListener('click', sendRating)
