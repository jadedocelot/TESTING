
//Like the equality operator teh less than converts data types while converting
//EXAMPLES
2   < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false



function lessThan(val) {
    if(val < 25) // if the VALUE (Whats on the left) is less than 25
    return "Under 25";

    {
     if(val < 50) //if the VALUE (Whats on the left) is less than 25
     return "Under 50";

    }

    return "Over 50";

}



console.log(lessThan(23)); OUTPUT: "Under 25" //TRUE
console.log(lessThan(25)); OUTPUT: "Under 50" //TRUE
console.log(lessThan(87)); OUTPUT: "Over 50" //FALSE