function strictOp(val) {
    if  (val === '7') 
    // Strict Operator will only accept 7 as a number to be TRUE
    // If '7' as string were entered then it would be considered FALSE
        return 'This is true!'; // when 7 is logged
        {

        return 'This is false.';// when '7' as string is logged
        
        }

}
var variable;
var arrVar = 'Argument';


console.log(typeof '7'); // Output in DEV CONSOLE: "string"
console.log(typeof 7); // Output in DEV CONSOLE: "number"
console.log(typeof variable); // Output in DEV CONSOLE: "UNdefined variable"
console.log(typeof 'operator'); // Output in DEV CONSOLE: "Operator"
console.log(typeof arrVar); // Output in DEV CONSOLE: DECLARED variable

/*
console.log(JSON.stringify(strictOp(7))); // FALSE  -- 'This  is false.' is printed in DEV LOG
console.log(strictOp(10)); // FALSE -- 'This  is false.' is printed in DEV LOG
console.log(strictOp('7')) // TRUE -- 'this is true' is printed in DEV LOG
*/
