/* Toggle sign in/ sign out */ 
// Select form
const registerForm = document.querySelector('.register-form-wrapper');
const logInForm = document.querySelector('.login-form-wrapper');

// Set display grid when click
const displayGrid = (element) => {
	switch (element) {
		case 'register-form':
			return (registerForm.style.display = 'grid');
		case 'login-form':
			return (logInForm.style.display = 'grid');
		default:
			return alert('Incorrect name of argument!');
	}
};

// Set display none when click out to modal
const displayNone = (element) => {
	switch (element) {
		case 'register-form':
			return (registerForm.style.display = 'none');
		case 'login-form':
			return (logInForm.style.display = 'none');
		default:
			return alert('Incorrect name of argument!');
	}
};
/* End toggle sign in/ sign out */