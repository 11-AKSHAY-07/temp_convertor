const temperatureInput = document.getElementById("temperature");
const scaleSelect = document.getElementById("scale");
const convertedTemperatureOutput = document.getElementById("converted-temperature");
const convertButton = document.getElementById("convert");

convertButton.addEventListener("click", function() {
  const temperature = temperatureInput.value;
  const scale = scaleSelect.value;

  if (!isNaN(temperature)) {
    const convertedTemperature = convertTemperature(temperature, scale);
    convertedTemperatureOutput.innerHTML = convertedTemperature;
  } else {
    convertedTemperatureOutput.innerHTML = "Invalid temperature";
  }
});

function convertTemperature(temperature, scale) {
  if (scale === "celsius") {
    return (temperature * 9 / 5) + 32+" °F";
  } else  (scale === "fahrenheit") 
    return (temperature - 32) * 5 / 9+" °C";
  } 
