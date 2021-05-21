// Farenheit to Celcius
function convertFahrToCelcius(degreeInFarenheit) {
    var degreeInCelcius = (5 * (degreeInFarenheit - 32)) / 9;
    if (Array.isArray(degreeInFarenheit) == true && degreeInFarenheit.length == 0) {
        return "[] is not a valid number but an array"
    } else if (Array.isArray(degreeInFarenheit) == true) {
        return degreeInFarenheit + " is not a valid number but an array"
    } else if (degreeInFarenheit == null) {
        return degreeInFarenheit + " is not a valid number but is null";
    } else if (typeof degreeInFarenheit == "object") {
        return Object.getOwnPropertyNames(degreeInFarenheit) + ": " + Object.values(degreeInFarenheit) + " is not a valid number but a/an " + typeof degreeInFarenheit;
    } else if (degreeInFarenheit == undefined) {
        return degreeInFarenheit + " is not a valid number but is " + typeof degreeInFarenheit;
    } else if (degreeInFarenheit == Infinity) {
        return degreeInFarenheit + " is not a valid number but is " + "Infinity";
    } else if (degreeInFarenheit == true || degreeInFarenheit == false) {
        return degreeInFarenheit + " is not a valid number but a boolean";
    } else if (degreeInFarenheit != Number(degreeInFarenheit)) {
        return degreeInFarenheit + " is not a valid number but a/an " + typeof degreeInFarenheit;
    } else {
        return degreeInCelcius.toFixed(4) + " is your temperature in degree celcius";
    }
}
convertFahrToCelcius();