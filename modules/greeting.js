// ANSI escape codes for terminal colors
const colors = {
	reset: "\x1b[0m",
	morning: "\u001b[38;5;111m",
	afternoon: "\u001b[38;5;226m",
	evening: "\u001b[38;5;202m",
	night: "\u001b[38;5;55m",
};

// Function to determine the part of the day
function getPartOfDay() {
	const hour = new Date().getHours();
	if (hour >= 6 && hour < 12) return "morning";
	if (hour >= 12 && hour < 17) return "afternoon";
	if (hour >= 17 && hour < 21) return "evening";
	return "night";
}

// Function to get the colored greeting
function getGreeting(name) {
    const now = new Date();
    const partOfDay = getPartOfDay();
    let color;

    switch (partOfDay) {
        case "morning":
            color = colors.morning;
            break;
        case "afternoon":
            color = colors.afternoon;
            break;
        case "evening":
            color = colors.evening;
            break;
        case "night":
            color = colors.night;
            break;
    }

    const formattedTime = now.toLocaleTimeString('en-US', { hour12: false }); // This will format the time in 24-hour format
    const formattedDate = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // Added formattedTime to the return string
    return `${color}Good ${
        partOfDay.charAt(0).toUpperCase() + partOfDay.slice(1)
    } ${name}! It is currently ${formattedTime} on ${formattedDate}.${colors.reset}`;
}


module.exports = getGreeting;
