// Toggle sign in/ sign out
const signUpBtnElement = document.querySelector('.nav__sign-up');
signUpBtnElement.addEventListener('click', () => {
	modalElement.style.display = 'block';
});

const modalElement = document.querySelector('#modal');
