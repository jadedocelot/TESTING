//Loggical or operator (||) returns  TRUE if either of the operands is TRUE. Otherwise, it returns FALSE

function logicOperator(val) {
    if(val < 25 || val > 50) // if the entered value is LESS than 25 or(||) GREATER than 50 then the return is FALSE
        return "Use your imagination."  // FALSE
    {
        return "Hey man, You're on the right track."
    }

}


console.log(logicOperator(15)); //FALSE  -- "Use your imagination." 
console.log(logicOperator(89)); //FASLE --- "Use your imagination." 
console.log(logicOperator(28)); //TRUE  ---- "Hey man, You're on teh right track."