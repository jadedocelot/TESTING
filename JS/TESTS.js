function optionsOptions(val) {
    answer = "";
    
switch(val) {
    case 1:
    case 2:
    case 3:
    case 4:
    answer = "Fuck you, too low";
break;

    case 5:
    case 6:
    case 7:
    case 8:
    answer = "cmon man, keep going";
break;

    case 9:
    case 10:
    case 11:
    case 12:
    answer = "Almost there...";
break;

    case 13:
    case 14:
    case 15:
    answer = "Bingo!";


}

    return answer;

}




console.log(optionsOptions(3));     // Fuck you, too low
console.log(optionsOptions(7));    // cmon man, keep going
console.log(optionsOptions(11));  // Almost there..
console.log(optionsOptions(15)); // Bingo!