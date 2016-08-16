//Tests a number's divisilitiy to determine if prime
var currentNumber = 1;
function isPrime (number) {
    if (number % 2 === 0 || isNaN(number) || number === null || number < 1) {
        return false;
    }
    var numberSQ = Math.sqrt(number);
    for (i = 3; i < numberSQ; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
var nextPrimeDesired = "yes";
while (nextPrimeDesired === "yes") {
    if (isPrime(currentNumber)) {
        document.write(currentNumber + ", ");
        nextPrimeDesired = prompt("Do you want to see the next prime number? \(yes or no\)");
    }
    currentNumber += 2;
    if (nextPrimeDesired !== "yes") {
        break;
    }
}