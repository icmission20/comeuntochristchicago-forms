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
	console.log('test');
	const scriptURL = "https://script.google.com/macros/s/AKfycbwzM0Ki3NNPH5UfEkjT2Ho3L-VMYYo3fOqzehkQ89wYsLVgzJjyg2mrPEzIeFLx861U/exec";
	e.preventDefault();
	fetch(scriptURL, {
		method: 'POST',
		body: new FormData(form)
	}).then(response => console.log('Success!', response)).catch(error => console.error('Error!', error.message));
	setTimeout(function() {
		window.parent.postMessage("redirect", "*");
	}, 1000);
})
