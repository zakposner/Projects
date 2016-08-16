function changeReturn () {
    var itemCost = parseFloat(prompt("What is the cost of the item you are looking to purchase"));
    if (itemCost < 1 || isNaN(itemCost) || itemCost === null) {
        itemCost = parseFloat(prompt("Please enter a valid item cost"));
    }
    var amountGiven = parseFloat(prompt("And how much money are you giving me?"));
     if (amountGiven < 1 || isNaN(amountGiven) || amountGiven === null) {
        amountGiven = parseFloat(prompt("Please enter a valid payment amount"));
    } else if (amountGiven < itemCost) {
        amountGiven = parseFloat(prompt("That isn't enough to pay for the item. Please enter a valid payment amount."));
    }
    var totalChangeDue = amountGiven - itemCost;
    
    var tempChange = totalChangeDue * 100;
    var hundreds = Math.floor(tempChange / 10000);
    tempChange = tempChange % 10000;
    var twenties = Math.floor(tempChange / 2000);
    tempChange = tempChange % 2000;
    var tens = Math.floor(tempChange / 1000);
    tempChange = tempChange % 1000;
    var fives = Math.floor(tempChange / 500);
    tempChange = tempChange % 500;
    var ones = Math.floor(tempChange / 100);
    tempChange = tempChange % 100;
    var quarters = Math.floor(tempChange / 25);
    tempChange = tempChange % 25;
    var dimes = Math.floor(tempChange / 10);
    tempChange = tempChange % 10;
    var nickels = Math.floor(tempChange / 5);
    tempChange = tempChange % 5;
    var pennies = Math.floor(tempChange / 1);
    
    var message = '<p>You are owed $' + totalChangeDue + ', which comes out to:</p>';
    message += '<ul><li>' + hundreds + ' hundred dollar bills</li><li>' + twenties + ' twenty dollar bills</li><li>' + tens + ' ten dollar bills</li><li>' + fives + ' five dollar bills</li><li>' + ones + ' one dollar bills</li><li>' + quarters + ' quarters</li><li>' + dimes + ' dimes</li><li>' + nickels + ' nickels</li><li>' + pennies + ' pennies</li></ul>';
    document.write(message);
}
changeReturn();