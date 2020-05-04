    // A switch statement can come in hand when you have a number of options to choose from      
   // Switch statements tests a value and can have various possible values 
  // CASE values are tested with strict equality (===)
 // (if a VAR were to have many options) --- 


function caseSwitch(val){
    answer = ""; 

    switch(val) { 
        case 1: 
        case "alpha":
            answer = "move forward"; /// if 1 or alpha is logged in
        break; //  NOTE BREAK is required in order  to move on to the next CASE
        case 2: 
            answer = "beta";
        break;
        case 3:
             answer = "gamma";
        break;
        case 4:
             answer = "delta";

    }
    return answer /// REMINDER  

}

console.log(caseSwitch("alpha"));