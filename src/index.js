var addNumbers = function(x,y) {
    var total = x + y
    return total
}

var testAddNumbers = addNumbers(4,4)

if( testAddNumbers > 10){
    console.log(testAddNumbers)
} else {
    console.log("The number is not big enough!")
}