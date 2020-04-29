function strictOp(val) {
    if  (val === 7)
        return 'This is true!';
        {

        return 'This is false.';
        
        }

}

console.log(guessmyAge('28'));  ///consider this a TEST INPUT for now ANCHOR 
//"This is my correct age!" will print out in DEV CON since 28 is TRUE
console.log(guessmyAge(67));
//"This is not my correct age" will print out in DEV CON since 67 is FALSE

console.log(strictOp('7'));
console.log()