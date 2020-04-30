// Greater Than Operator 

function testGreaterThan(val) {
    if(val > 100) // if the 
        return "Over 100"
    {
    
    if(val > 10) // if the value entered is GREATER than 10 then you are "OVER 10"
        return "Over 10"

    }

    return "10 or Under" // if a value of 10 or lower is entered in 

}

console.log(testGreaterThan(10)); // OUTPUT: "10 or Under"
console.log(testGreaterThan(25)); // OUTPUT: "Over 10"
console.log(testGreaterThan(234)); //OUTPUT: "Over 100"