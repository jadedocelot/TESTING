function guessThis(val) {
    if (val < 4) {
    return  "No mames way.";
} else if ( val < 9 ) {
    return "cmon man"; 

}  else if ( val < 14) { 
    return "Not quite" 

} else if ( val <= 17) {
    return "You're thinking too small.";

} else if (val === 18 ){
    return "That's it!";

} else return "You're delusional...."




}


console.log(guessThis(3));       // No mames
console.log(guessThis(7));     ////cmon man
console.log(guessThis(12));    // Not quite
console.log(guessThis(16));  // youre thinking too small
console.log(guessThis(18));  ///// THATS it
console.log(guessThis(44));  ///DELUSIONAL
//console.log(guessThis());
//console.log(guessThis());


/// TODO work on a lessThan/greaterThan function