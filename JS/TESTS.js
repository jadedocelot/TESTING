function warmCold(val){
    if (val < 25) {
        return "cold";

    } else if (val < 50 ) {
        return "Warmer"; 
        
    } else if (val < 75) {
        return "Hotter"
    } 
         else return "You're on the money";
         
    }

console.log(warmCold(17));   // COLD
console.log(warmCold(27));  // Warmer
console.log(warmCold(72))  // HOTTER
console.log(warmCold(80));// You're on the money 


