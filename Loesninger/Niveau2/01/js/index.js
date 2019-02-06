document.addEventListener ("DOMContentLoaded", (event) => {

	// Opretter et Array med alle knapperne
	let btnElements = document.querySelectorAll ("#buttons button");

	// DEBUG -- Udskriver Array'et
	// console.log (btnElements);

	// Gør noget med hver eneste knap (dette er en løkke)
	btnElements.forEach ((btnElement) => {

		// Giver hver knap et click-event
		btnElement.addEventListener ("click", () => {
			// Sluk alle knapper
			btnElements.forEach ((btnElement) => {
				btnElement.style.backgroundColor = "#eee";
			});

			// Tænd den knap jeg trykkede på
			btnElement.style.backgroundColor = "#7f7";
		});
	});

}); // Afslutter: DOMContentLoaded