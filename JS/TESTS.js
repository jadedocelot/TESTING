function caseSwitchDefault (val) {
    answer = "";

    switch(val) {
        case 1:
            answer = "Guess too low";
        break;
        case 2:
             answer = "Warmer";
        break;
        case 3:
            answer = "Hotter";
        break;
        case 4:
            answer = "Correct!"
        break
        default: /// This is similar to the ELSE statement  in IF/ELSE --- So like a FALSE value? 
            answer = "You're out of range";



    }

        return answer;


}


console.log(caseSwitchDefault(1)); // Guess too low
console.log(caseSwitchDefault(2)); // Warme
console.log(caseSwitchDefault(3)); // Hotter
console.log(caseSwitchDefault(4)); // Correct
console.log(caseSwitchDefault(55)); // You're out of range
