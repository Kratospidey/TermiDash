const config = require("config");
const getGreeting = require("./greeting");
const getWeather = require("./weather");

const loadModules = async () => {
	const name = config.get("userInfo.name");
	const greeting = getGreeting(name);
	const weather = await getWeather();

	return {
		greeting,
		weather,
	};
};

module.exports = loadModules;
