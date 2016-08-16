//Will find the vaue of e up to 20 decimal places
var e = 2.71828182845904523536
var digits = prompt("How many digits of e would you like to see? \(1 - 20\)")
while (digits > 20 || isNaN(digits) || digits === null) {
    digits = prompt ("Please select a number between 1 and 20")
}
function finde(digits) {
    this.digits = digits;
    var factor = Math.pow(10, digits);
    var tempe = e * factor;
    var tempeRounded = Math.round(tempe);
    var answer = tempeRounded / factor;
    return answer
}
document.write(finde(digits));