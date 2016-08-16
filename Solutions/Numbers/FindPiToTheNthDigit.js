//Will find the vaue of Pi up to 20 decimal places
var pi = 3.14159265358979323846
var digits = prompt("How many digits of pi would you like to see? \(1 - 20\)")
while (digits > 20 || isNaN(digits) || digits === null) {
    digits = prompt ("Please select a number between 1 and 20")
}
function findPi(digits) {
    this.digits = digits;
    var factor = Math.pow(10, digits);
    var tempPi = pi * factor;
    var tempPiRounded = Math.round(tempPi);
    var answer = tempPiRounded / factor;
    return answer
}
document.write(findPi(digits));