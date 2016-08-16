//Will find all of the prime factors of a number
var userNumber = prompt("Enter a number to see its prime factors.");
console.log(userNumber);
var primeFactors = [];
while (userNumber === 0 || userNumber === null || isNaN(userNumber)) {
   userNumber = prompt("Please enter a valid number to see its prime factors.");
}
function pushFactors (number) { //Checks factors and pushes them to the array
    var num = this.number;
    while (userNumber % num === 0) {
        userNumber /= num;
        primeFactors.push(num);
        console.log(num);
    }
}
pushFactors(2);
pushFactors(3);
pushFactors(5);
document.write(primeFactors);

/*
while (userNumber % 2 === 0) {
    userNumber /= 2;
    console.log(2);
    primeFactors.push(2);
}
*/