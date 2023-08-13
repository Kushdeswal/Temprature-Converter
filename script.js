function convertTemperature() {
    let celsiusInput = document.getElementById("celsius");
    let fahrenheitInput = document.getElementById("fahrenheit");

    if (celsiusInput.value !== "") {
        let celsiusValue = parseFloat(celsiusInput.value);
        let fahrenheitValue = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else if (fahrenheitInput.value !== "") {
        let fahrenheitValue = parseFloat(fahrenheitInput.value);
        let celsiusValue = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = celsiusValue.toFixed(2);
    } else {
        fahrenheitInput.value = "";
    }
}
