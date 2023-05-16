const username = document.querySelector('#username');
const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#repeatPassword');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');

const showError = (input, msg) => {
	//msg-placehoders

	const formBox = input.parentElement; //becasue the error class is set on the parent element
	const errorMsg = formBox.querySelector('.error-text');

	formBox.classList.add('error');
	errorMsg.textContent = msg;
};
/**/
const clearError = (input) => {
	const formBox = input.parentElement; //becasue the error class is set on the parent element
	formBox.classList.remove('error');
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkLength = (input, min) => {
	//validation of inputs
	if (input.value.length < min) {
		const labelValue = input.previousElementSibling.innerText.slice(0, -1);
		showError(input, `${labelValue} value needs to be at least ${min} characters long`);
	}
};

const checkPassword = (pass1, pass2) => {
	if (pass1.value !== repeatPassword.value) {
		showError(repeatPassword, 'Passwords do not match.');
	}
};

const sendForm = (e) => {
	e.preventDefault();

	checkForm([username, password, repeatPassword, email]);
	checkLength(username, 3);
	checkLength(password, 8);
	checkLength(repeatPassword, 8);
	checkPassword(password, repeatPassword);
};
//---the below part works
const clearForm = (e) => {
	e.preventDefault();
	[username, password, repeatPassword, email].forEach((element) => {
		element.value = '';
	});
};
sendBtn.addEventListener('click', sendForm);
clearBtn.addEventListener('click', clearForm);
