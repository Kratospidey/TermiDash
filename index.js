const config = require("config");
require('dotenv').config();

const apiKey = process.env.API_KEY;
// console.log(`Your API key is ${apiKey}`);


const appName = config.get("appName");
const tempUnit = config.get("weather.tempUnit");
const timeFormat = config.get("time.format");
console.log(`Welcome to ${appName}!`);
console.log(`Your Preferred Temperature unit is ${tempUnit}!`);
console.log(`Your Preferred Time Format is ${timeFormat}!`);
