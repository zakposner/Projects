alert("We will now calculate the cost of tiling a floor. Please enter only numbers.");
function findCost () {
    var costPerTile = prompt("What is the cost you are paying per tile?");
    var height = prompt("What is the height, in feet, of the area to be tiled?");
    var width = prompt("What is the width, in feet, of the area to be tiled?");
    var totalArea = height * width;
    var totalCost = costPerTile * totalArea;
    document.write("It will cost $" + totalCost + " to tile an area of " + 
        totalArea + " square feet.");
}
findCost();