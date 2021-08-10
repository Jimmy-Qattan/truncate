function truncate(number, digits) {
  finalNumber = 0;

  numberAsString = number.toString();

  finalNumber += parseInt(numberAsString.split(".")[0]);
  let afterDecimalsToString = numberAsString.split(".")[1];

  let numbersAfterDecimalToReturn = parseInt(afterDecimalsToString.substr(0, digits)) / Math.pow(10, digits);

  finalNumber += numbersAfterDecimalToReturn

  return finalNumber;
}
