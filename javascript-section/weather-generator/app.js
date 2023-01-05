const prompt = require("prompt-sync")();

const weatherParameters = {
    minTemperature: -40,
    maxTemperature: 45,
    minWindSpeed: 0,
    maxWindSpeed: 113,
    minHumidity: 0,
    maxHumidity: 100,
    weatherDescriptions: [
        "rainy",
        "wet",
        "humid",
        "dry",
        "arid",
        "frigid",
        "foggy",
        "windy",
        "stormy",
        "breezy",
        "windless",
        "calm"
    ],
}

function generateRandomNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber).toString();
}

function generateRandomTemperature() {
    return generateRandomNumber(weatherParameters.minHumidity, weatherParameters.maxTemperature);
}

function generateRandomWeatherDescription() {
    const indexRandomDescription = generateRandomNumber(0, weatherParameters.weatherDescriptions.length - 1);
    return weatherParameters.weatherDescriptions[indexRandomDescription];
}

function generateRandomWindSpeed() {
    return generateRandomNumber(weatherParameters.minWindSpeed, weatherParameters.maxWindSpeed);
}

function generateRandomHumidity() {
    return generateRandomNumber(weatherParameters.minHumidity, weatherParameters.maxHumidity);
}

function main() {
    const userInput = prompt("Welcome to Weather Random Generator! What is your name?" ).toString();
    console.log(`Hi ${userInput}! Today's weather description:`);
    console.log("Temperature:", generateRandomTemperature(), "celsius");
    console.log("Weather description:", generateRandomWeatherDescription());
    console.log("Wind speed:", generateRandomWindSpeed(), "m/s");
    console.log("Humidity:", generateRandomHumidity(), "%");
}

main();
