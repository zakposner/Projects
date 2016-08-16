//Fibonacci Generator
var entryNumber = prompt("Determine an endpoint for the fibonacci sequence");
var fibonacciArray = [1,1];
function generateFibonacci() {   
    while(fibonacciArray[fibonacciArray.length - 1] < entryNumber) {
        var newNumber = (fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2]);
        if (newNumber > entryNumber) {
            return
        }
        fibonacciArray.push(newNumber);
    }
}
generateFibonacci();
document.write(fibonacciArray);