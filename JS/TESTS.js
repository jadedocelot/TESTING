
//Iterate with javascript while loops ANCHOR //
// Fun fact, you can run the same code multiple times by using loop 
// The first type of loop being introduced is (while)
    // Becuase  it runs "while" a specified condition is TRUE and stops once that condition is no longer true 
        //REMINDER: TRUE = ON & FALSE = OFF 

var ourArray = [];
var i = 0;
while(i < 6) {
  ourArray.unshift(i); // .unshift will reverse the count
  i++;
}


/* another example*/

/*var ourArray = [];
var i = 5;
    while(i >= 0) {
    ourArray.push(i);
    i--;
    } */


//console.log(ourArray) // OUT