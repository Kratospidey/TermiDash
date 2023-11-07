const config = require("config");
const axios = require("axios");

// Function to get weather using OpenWeatherMap API
async function getWeather() {
	try {
		// Build the URL from config parameters
		const baseUrl = config.get("openWeatherMap.baseUrl");
		const apiKey = process.env.OPENWEATHERMAP_API_KEY;
		const units = config.get("openWeatherMap.units");
		const lat = config.get("openWeatherMap.lat");
		const lon = config.get("openWeatherMap.lon");

		// Use axios to make the GET request
		const response = await axios.get(`${baseUrl}weather`, {
			params: {
				lat: lat,
				lon: lon,
				units: units,
				appid: apiKey,
			},
		});

		// Extract the data you need from the response
		const { weather, main, wind } = response.data;

		// Format the weather data as needed
		return `Weather: ${weather[0].main}, Temperature: ${main.temp}°${
			units === "metric" ? "C" : "F"
		}, Wind Speed: ${wind.speed} meter/sec`;
	} catch (error) {
		console.error("Error fetching weather:", error);
		return "Unable to retrieve weather data.";
	}
}

module.exports = getWeather;
