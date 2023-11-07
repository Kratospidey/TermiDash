require("dotenv").config();
const loadModules = require("./modules/moduleLoader");

(async () => {
	const appData = await loadModules(); // Load all module data asynchronously

	console.log(appData.greeting);

	// Create a dynamic divider based on the width of the terminal window
	const divider = "-".repeat(process.stdout.columns);
	console.log(divider);

	console.log(appData.weather); // Outputs the weather module result
})();
