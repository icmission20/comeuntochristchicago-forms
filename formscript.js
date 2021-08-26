function onLoad() {
	setTimeout(function() {
		window.parent.postMessage("readyForParameters", "*");
	}, 2000);
	window.onmessage = (event) => {
		if (event.data[0] === "parameters") {
			document.getElementById("parameters").setAttribute("value", event.data[1]);
		}
	};
}
const form = document.forms['comeuntochrist-form'];
form.addEventListener('submit', e => {
	document.getElementsByClassName("formButton")[0].style.display = 'none';
	const scriptURL = "https://script.google.com/macros/s/AKfycbw7ff_Vh6f0CXqOXkfRxCnDYuRvIdyIhEOjLa8E_D1S2Rw3-YH23SK2tP-P1UaGJ6mv/exec";
	e.preventDefault();
	fetch(scriptURL, {
		method: 'POST',
		body: new FormData(form)
	}).then(response => console.log('Success!', response)).catch(error => console.error('Error!', error.message));
	setTimeout(function() {
		window.parent.postMessage("redirect", "*");
	}, 1200);
})
