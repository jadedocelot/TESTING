//(>=) compares values (Unlike strict operators) where "" >= # = TRUE
//
/*
6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false
*/

function greaterThanEqual (val) {
    if(val >= 10) 
        return "10 or over";
    {
        if (val >= 100)
        return "100 or Over";

}

        return "Under 10"

}

console.log(greaterThanEqual('10'));
console.log(greaterThanEqual('100'));
console.log(greaterThanEqual(3));