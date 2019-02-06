document.addEventListener ("DOMContentLoaded", (event) => {

	// Henter en reference til button elementet
	let btnElement = document.querySelector ("#my-button");

	// Sætter state variablen til 0 (dette er start-værdien)
	let btnState = 0;

	// Giver button elementet et click-event
	btnElement.addEventListener ("click", () => {
		// console.log ("Knap trykket");

		// Spørger: Hvis knappen var slukket da vi trykkede
		if (btnState == 0) {
			// Sæt state til "tændt"
			btnState = 1;

			// Skift knappens baggrundsfarve
			btnElement.style.backgroundColor = "#7f7";
		}
		// Spørger: Hvis knappen var tændt da vi trykkede
		else {
			// Sæt state til "slukket"
			btnState = 0;

			// Skift knappens baggrundsfarve
			btnElement.style.backgroundColor = "#eee";
		}
	});
});