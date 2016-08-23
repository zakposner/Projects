var calc = {
    
    currentNumber: 0,
    
    //Basic Functions
    add: function (x, y) {
        currentNumber = x + y;
        console.log(currentNumber);
    },
    subtract: function (x, y) {
        currentNumber = x - y;
        console.log(currentNumber);
    },
    divide: function (x, y) {
        currentNumber = x / y;
        console.log(currentNumber);
    },
    multiply: function (x, y) {
        currentNumber = x * y;
        console.log(currentNumber);
    },
    
    // Advanced Functions
    nthPower: function (x, n) {
        currentNumber = Math.pow(x, n);
        console.log(currentNumber);
    },
    nthRoot: function (x, n) {
        currentNumber = Math.pow(x, 1/n);
        console.log(currentNumber);
    },
    nthLog: function (x, n) {
        currentNumber = (Math.log(x) / Math.log(n));
        console.log(currentNumber);
    },
    
    //Trig Functions
    sin: function (x) {
        currentNumber = Math.sin(x);
        console.log(currentNumber);
    },
    cos: function (x) {
        currentNumber = Math.cos(x);
        console.log(currentNumber);
    },
    tan: function (x) {
        currentNumber = Math.tan(x);
        console.log(currentNumber);
    },
    arcsin: function (x) {
        currentNumber = Math.asin(x);
        console.log(currentNumber);
    },
    arccos: function (x) {
        currentNumber = Math.acos(x);
        console.log(currentNumber);
    },
    arctan: function (x) {
        currentNumber = Math.atan(x);
        console.log(currentNumber);
    }    
    
}