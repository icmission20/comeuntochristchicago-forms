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
	const scriptURL = "https://script.google.com/a/macros/missionary.org/s/AKfycbzoWC9efA08Z7KRTYpzktYW7Rd00ccI6QnW1Go8BWtyLFdJjt1OZzTeseMtc79iDzZC/exec";
	e.preventDefault();
	fetch(scriptURL, {
		method: 'POST',
		body: new FormData(form)
	}).then(response => console.log('Success!', response)).catch(error => console.error('Error!', error.message));
	setTimeout(function() {
		window.parent.postMessage("redirect", "*");
	}, 1000);
})
