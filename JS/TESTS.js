function guessmyAge(myVal) {
    if (myVal == 28) // if myVal is 28 then == will retrieve TRUE  
    // Eaqualiy Op (==) compares two values and returns TRUE if equivilant or FALSE if not
        return "This is my correct age!"; // TRUE 
{

        return "This is not my correct age"; //FALSE
}

}

console.log(guessmyAge('28'));  ///consider this a TEST INPUT for now ANCHOR 
//"This is my correct age!" will print out in DEV CON since 28 is TRUE
console.log(guessmyAge(67));
//"This is not my correct age" will print out in DEV CON since 67 is FALSE
