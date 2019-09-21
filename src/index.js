var addNumbers = function(x,y) {
    var total = x + y
    return total
}

var testAddNumbers = addNumbers(4,4)

if( (testAddNumbers > 5) && (testAddNumbers < 10)){
    console.log(testAddNumbers)
} else {
    console.log("The number is not big enough!")
}

for (ii = 1; ii <= 100; ii++){
    var current = ii
    console.log(current)
}