////GREETING SCRIPT////
var today = new Date(); // create a new date object   
var hourNow = today.getHours(); // find the current hour
var greeting;

if (hourNow > 18) {  ////< if hourNow is GREATER than 18 you will be greeted with 'Good evening
   greeting = 'Good evening!';  
////\/ else if =  BUT IF hourNow is GREATER than 12 then greet user with "Good afternoon"
} else if (hourNow > 12) { 
    greeting = 'Good afternoon!';

} else if (hourNow > 0) {
    greeting = 'Good morning!';

} else {
 greeting = 'Welcome!';

}

document.write('<h1>' + greeting + '</h1>'); 
///GREETING SCRIPT END//////

///ASSIGN VAR///
var username; // VAR are DECLARED
var message;
username = 'Edgar' ; // STRINGING the VAR
message = 'See you in hell.' ;

var elName = document.getElementById('name');
elName.textContent = username;
var elNote = document.getElementById('note');
elNote.textContent = message;

///ASSIGN VAR END///

/* Using a VAR to store a BOOLEAN*/
var inStock;
var shipping;
instock = true; //// BOOLEANS consist of TRUE or FALSE (otherwise an ON/OFF switch, In this line a BOOLEAN has been assigned to a VAR)
shipping = false;

var elStock = document.getElementById('stock') ;
elStock.className = inStock;  

var elShip = document.getElementById('shipping');
elShip.className = shipping; 
/* Using a VAR to store a BOOLEAN*/

/*SHORTHAND VAR ASSIGN METHODS*/

/////METHOD 1 ////
var price = 5;
var quantity = 14;
var total = price * quantity;


price = 10;

/////METHOD 2////

var price, quantity, total; ////THREE VAR are declared 
price = 5;/// ONE VAR is assigned a value
quantity = 14;
total = price * quantity; 

/////METHOD 3////

var price = 5, quantity = 14; ///TWO VAR are declared and assigned values on the same line
var total = price * quantity; // ONE VAR is delared and assigned a value 

/////METHOD 4??////
var el = document.getElementById('cost');
el.textContent = '$' + total; 

/*SHORTHAND VAR ASSIGN METHODS END*/

/*Creating an ARRAY LITERAL*/ /////REVIEW PREFERRED METHOD //an array is great for when you are working a "LIST" of set values
var colors; 
colors = ['white', 'black', 'custom']; //// an array of values

var el = document.getElementById('colors');
el.textContent = colors[0];
//// ANOTHER LAYOUT FOR ARRAY LITERAL below 
colors = ['white',  ///////The way this array is indedx is 0-2
           'black',
           'custom'];
/*Creating an ARRAY LITERAL END*/


/* Creating an ARRAY CONSTRUCTOR */ 

var colors = new Array('black', //0
                        'white',//1
                        'custom');//2
///This array listed above is actually numbered list startings with 0-2

var itemThree;
itemThree = colors[2]; ///This will then pick-up the 'Custom' value listed above

var el = document.getElementById('colors');
el.textContent = colors[0];
 /* Creating an ARRAY CONSTRUCTOR END*/

 /* Using artithmetic operators */ 

var subtotal = (5 + 5) * 3;  // SUBTOTAL is 30
var shipping = 0.5 * (13 + 1); // SHIPPING is 7 

var total = subtotal + shipping; // GRANDTOTAL is 37

var elSub = document.getElementById('subtotal');     /////elSub is declared and will search the HTML file for ID="subtotal"
elSub.textContent = subtotal; ///elSub  will place subtotal value in place of HTML ID="subtotal"

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('grandTotal');
elTotal.textContent = total;

 /* Using artithmetic operators END*/ 

 /* Increment/decrement a number (To add 1) */

myVar = 87;

myVar++; ////1 will be added. myVar now = 88

MyVar = 87;
MyVar--; //1 will be subtracted. myVar now = 86 
/* Increment a number (To add 1) */

//REVIEW Working on how the code below will know who to greet by the current time
// for Binturong/Index.js
var today = new Date();
var HourNow = today.getHours();

var elUserOne = document.getElementById('visitor');
var elUserTwo = document.getElementById('visitor');
var elUserThree = document.getElementById('visior');


var today = new Date();
var HourNow = today.getHours();

if (hourNow > 18) {
    var elUserOne = document.getElementById('visitor');
    elUserOne.textContent = username[0];
}

if (hourNow > 12) {
    var elUserTwo = document.getElementById('visitor');
    elUserTwo.textContent = username[1];
}

if (hourNow > 0) {
    var elUserThree = document.getElementById('visior');
    elUserThree.textContent = username[2];

}



/* The example below is of setting up an array.*/

var myArray = ['String', 'Example', 4]; ///in order to set up an array VAR you must place decleration

    /// Belows example presents a "NESTED" array or alsom considered a MULTI DIMENSIONAL array

    var nestArray = [["Nested", 23], ["Multi", 890];]


///Resting arrays within other arrays 
///This is also refered to as multi dimensional array 
[["Oakland", 28], ["Lakers", 23]]
/////END/////


/* It is possible to mute arrays, you can replace values of an array dow the road */

var myArray = [30, 60, 90];

myArray[1] = 55;/// myArray now = 30, 55, 90 

/*END */

/*Below is an example of arrays of arrays*/

var arrayArrays = [ 
    [2, 3, 5], [4, 4, 5], [[3, 7 ,16], 8, 13, 22]
];

arrayArrays = [0][1]; /// = 3 within 1st array 
arrayArrays = [1][2]; /// =  5 within 2nd array 
arrayArrays = [2][0][1]; /// = 7 withing

/*END*/

/* Arrays with a PUSH(). This will append data to the end of the array*/
var myPush = [1, 2, 3,];

myPush.push(4); /// myPush = [1,2,3,4];

/*manipulating arrays with pop(). This will remove the last number of an array which can then be assigned to a VAR*/

var threeArr = [1,2,3]; 

var popOff = threeArr.pop(); ///The last number of threeArr as now been assigned to popOff

console.log(threeArr); /// Returns 1,2
console.log(popOff); ///// Returns 3

/* manipulating arrays with .shift() - The first number of array will be romoved and assigned to new VAR */

var myArray = [["John", 24], ["Edgar", 29]];

var removehisArray = myArray.shift();///This will remove the first array of myArray

//myArray = ["Egdar", 29];


/* Now this one was a fucking bitch but here it is.*/
/* This is  is continuing in multiplying arrays, the following syntax is to replace the first array of a multi dimensional array*/

var myArray = [[Edgar, 29], [Allison, 35]]; ///// OG Array 

myArray.shift();//Bumps the first element off of the array  
var hahaHa = myArray.unshift(["Danica", 27]);///This has now taken filled the first empty slot of the array
///myArray = [["Danica, 27"], ["Allison", 35]];
console.log(myArray);

/* The bottom syntex which is a VAR consists of a MULTI DIM array containing several sub arrays*/

var myList = [["Edgarlll", 29], ["Allison", 35], ["Meg", 25], ["Danica", 27], ["Kevin", 27]];

/*end*/  

/* calling or to invoke a function to be shown in console*/

function consoleFunction() {   ////Declaring the function
    console.log("Ya Stink!");   ////Mesage to be presented in dev console when called apon 
}

consoleFunction(); ///Function being called 

/*end*/

/*setting up parameters (VAR) as placholders*/

function FuntionPassArg(Number1, Number2){  ///Assigning parameters to functionPassArg, which again act as placeholders for the values to be called
    console.log(Number1 + Number2); // syntax how how to use parameters

}

FuntionPassArg(5, 5); /// passing values over to parameters Number1 and Number2 /// OUTPUT 10
FuntionPassArg(8, 8);//// Output 16

/*end*/

/* SCOPES and GLOBAL SCOPES*/

var myGlobal = 10; ///var defined outside of a function block makes this a global scope, which allows it to be seen seen throughout the whole code

function Fun1() {

 oopsGlobal = 5; ///a variable without a VAR is automat a global scope as long as it's within a function statement, though if VAR were included it would no longer be global and would only be aplied to Fun1 and not would be condisdered undefined within Fun2
    
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {  ////since VAR myGloable was defined outside of a function it can be picked up and will not be UNDEFINED
   /*NO VAR*/ output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") { ///if VAR was included oopsGlobal it would would directly be assigned to Fun1 but sice VAR was not inluded it would automatic become GLOBALS, even if placed within another function  
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();


/*Local Scopes*/

function myLocalScope() {
    var myVar = 'loco'; ////VAR declared within a function are considered a LOCAL SCOPE which means they are only visible within that function. Removing the VAR would then make it GLOBAL and accessible from anywhare within the code
    console.log(myVar); /// will print out VAR in dev console since variable was declared within the function
                    
 }

 myTest();
 console.log(myVar);////myVar is undefined since variable was declared with a VAR within myLocalScope function

/* END */

/*  REVIEW GLOBAL vs LOCAL scope functions */

var outerWear = "Shirt"; //Global Variable

function todaysOutfit(){
    var outerWear = "Sweater"; /// This VAR will take precedence over the GLOBAL VAR 
        return outerWear;

}

todaysOutfit();

/*understanding the RETURN function */

function timesFive(Number) {  //Number acts a a placeholder for a value to be placed into it
	return Number * 5;   /// * 5 will be returned and applied to whatevert value is assigned to the Number keyword

}

var AnswerOne = timesFive(5);   // 5 * 5 
var AnwswerTwo = timesFive(0); // 0 * 5 
var AnswerThree = timesFive(2); // 2 * 5 

console.log(AnswerOne);  // 25 in DEV CON LOG
console.log(AnwswerTwo); // 0 in DEV CON LOG
console.log(AnswerThree); // 10 in DEV CON LOG

console.log(AnswerOne);


/*END RETURN*/

/*undertanding undefined values returned by a function*/

var sum = 0;

function addThree(); {  /// The value here is undefined since there is no return 
    sum = sum + 3; 
    /* return Number * 5; <-- missing this functuion will declare this undefined*/


    }

function addFive() {
    sum = sum + 5; 

}
// NOTE GETTING HARDER
/* Assignments with a return value*/

var processed = 0; //old value

function functionArg(num) {
    return (num + 5) / 5; // RETURN value will be assigned top 
}

processed = functionArg(5); /// functionArg mathmatical expression has now been assigned to Var processed
// var processed  = 5 + 5 / 7;

console.log(processed); /// prints NEW VALUE; var processed = 2  in DEV CONSOLE




/* END */


/*Understanding QUEUES ---  simulation of the sum of a the functalnaility of a data structure*/
//in compueter science QUEUES are abstract data structures where items are kept in order

function nextInLine(arr, item) {
	arr.push(item); ////PUSHES new item to the back of the array 
	return arr.shift(); /// .SHIFT() will remove the first item of the array and present the removed # in DEV CONSOLE 
}

var testerArr = [1,2,3,4,5];

console.log("Before:" + JSON.stringify(testerArr)); 
//present VAR = testerArr before being manipulated  --- [1,2,3,4,5] printed in DEV Console
console.log(nextInLine (testerArr, 6)); 
//1. arr.push() will add 6 to the back of the array
//2. return arr.shift() remove the 1 from testerArra and print removed number in DEV CONSOLE
//NOTE Note: The return value of the shift method is the removed item.
// JSON.STRINGIFY converts JS value into a string --- Alligning them in brackets    
console.log("After:" + JSON.stringify(testerArr)); 
/// will present var testerArr POST manmipulation  ---> [2,3,4,5,6] printed in DEV CONSOLE

/*Working on BOOLEANS*/
//which may only have two functions TRUE or FALSE (on or off). BOOLEANS are never written in quotes

function booLean() { 

    return true; // booLean will return true value

}

/* Using conditiontion logic with IF statements*/
    // If statememt is used to make decisions in code 
function canyouGivemeSomeAdvice (isTrue){  
    if (isTrue)/*condition*/ { //if whatShouldBeDone is TRUE
        return "Code and never work another day in your life!";  // RETURN "Code and never work another day in your life"
            // If function above is TRUE
    }
    
        return "Regardless, no turning back now"; //if FALSE, statement above is not executed and this message is retured
            // If function above is FALSE 
}

console.log(canyouGivemeSomeAdvice(true)); /// "code and never work another day in your life" is returned -- since function is TRUE
console.log(canyouGivemeSomeAdvice(false)); // Ragardless, no turning back now" is returned  --- Since function is FALSE 


///END//

/* ANCHOR comparrison with the EQUALITY operator */

// Equality operator ==
// == will perform a conversion if the value is entered in as a string or as a number
///NOTE that = is an asign operator

function guessmyAge(myVal) {
    if (myVal == 28) // if myVal is 28 then == will retrieve TRUE  
    // Eaqualiy Op (==) compares two values and returns TRUE if equivilant or FALSE if not
        return "This is my correct age!"; // TRUE 
{

        return "This is not my correct age"; //FALSE
}

}

console.log(guessmyAge(28));  ///consider this a TEST INPUT for now  
//"This is my correct age!" will print out in DEV CON since 28 is TRUE
console.log(guessmyAge(67));
//"This is not my correct age" will print out in DEV CON since 67 is FALSE


//Below is on how to confirm is the value is TRUE of FALSE
1 == 1  // True 
1 == 2 // False
1 == "1" // True
"3" == 3 // True

///END////

/*Using strict eqaulity operators*/
//Strict OPS don't perform conversions
// Are the counterpart to equality operators
//3 is a number, '3' is a string 

function strictOp(val) {
    if  (val === '7') // SRICT EQUAL OPERATORS
    // Strict Operator will only accept 7 as a number to be TRUE
    // If '7' as string were entered then it would be considered FALSE
        return 'This is true!'; // when 7 is logged
        {

        return 'This is false.';// when '7' as string is logged
        
        }

}

console.log(strictOp(7)); // FALSE  -- 'This  is false.' is printed in DEV LOG
console.log(strictOp(10)); // FALSE -- 'This  is false.' is printed in DEV LOG
console.log(strictOp('7')) // TRUE -- 'this is true' is printed in DEV LOG

// The TYPEOF operator will determine the type of variable will be used

var variable;
var arrVar = 'Argument';


console.log(typeof '7'); // Output in DEV CONSOLE: "string"
console.log(typeof 7); // Output in DEV CONSOLE: "number"
console.log(typeof variable); // Output in DEV CONSOLE: "UNdefined variable"
console.log(typeof 'operator'); // Output in DEV CONSOLE: "Operator"
console.log(typeof arrVar); // Output in DEV CONSOLE: DECLARED variable


///END//////

<<<<<<-----Inequality operator----------->
// != is the inequality operator
// The inequality op does the opposite of the equality operator presenting a FALSE value as oppose  to == being TRUE
// Like the equality OP the inequality will convert data types of value white comparring I E example below 
  
    1 != 1 // Returns FALSE
    '1' != 1 // Returns FALSE
    1 != '1' // Returns FALSE 
    1 != 2 // Returns TRUE

// == is TRUE 
// != is FALSE

function tellTheTruth(guessNumber) {
    if (guessNumber != 28) // The ineqaulity operator is stating that anything NOT 28 is FALSE
    return "This is false";

    {

    return "This is True";


    }

}
console.log(tellTheTruth(23)); // OUTPUT: "This is false"
console.log(tellTheTruth(28)); // OUTPUT: "This is TRUE"

/* STRICT INEQUALITY OPERATORS */
// !==
// Conversion is not performed
//if the value is entered in as a STRING then a STRING must be entered in in order to match VICE VERSA with numbers

    1 != 1 // Returns FALSE
   '1' != 1 // Returns TRUE
    1 != '1' // Returns TRUE 
    1 != 2 // Returns TRUE  

    function tellTheTruth(guessNumber) {
        if (guessNumber !== 28)
        return "This is false";
    
        {
    
        return "This is True";
    
    
        }
    
    
    }
    
    console.log(tellTheTruth(28)); "This is True"
    console.log(tellTheTruth('28')); "This is False"

    /* END */

    <----- GREATER Than Operator ----->
   
 // Greater Than Operator 

function testGreaterThan(val) {
    if(val > 100) // if the value entered is greater than 100 then you are "over 10"  -- TRUE
        return "Over 100"
    {
    
    if(val > 10) // if the value entered is GREATER than 10 then you are "OVER 10" --- TRUE
        return "Over 10"

    }

    return "10 or Under" // if a value of 10 or lower is entered in --- FALSE

}

console.log(testGreaterThan(10)); // OUTPUT: "10 or Under"
console.log(testGreaterThan(25)); // OUTPUT: "Over 10"
console.log(testGreaterThan(234)); //OUTPUT: "Over 100"

/* END */


    <----- GREATER Than or Equal to Operator ----->

// Greater Than Equal To (>=)

//(>=) compares values (Unlike strict operators) where "" >= # = TRUE


6   >=  6   // true
7   >= '3'  // true
2   >=  3   // false
'7' >=  9   // false


function greaterThanEqual (val) {
    if(val >= 10)  
        return "10 or over"; // if a #/STRING >= is entered in 
    {
        if (val >= 100)
        return "100 or Over"; // if a #/STRING >= is entered in 
}

        return "Under 10";// if a #/STRING < is entered in
}

console.log(greaterThanEqual('10')); // TRUE
console.log(greaterThanEqual('100')); // TRUE 
console.log(greaterThanEqual(8)); //FALSE 

/* END */

<--- LESS THAN OPERATORS --->

//As you would imagine, the less than operator (<) does the following

//Like the equality operator teh less than converts data types while converting
//EXAMPLES
2   < 5  // true
'3' < 7  // true
5   < 5  // false
3   < 2  // false
'8' < 4  // false



function lessThan(val) {
    if(val < 25) // if the VALUE (Whats on the left) is less than 25
    return "Under 25";

    {
     if(val < 50) //if the VALUE (Whats on the left) is less than 25
     return "Under 50";

    }

    return "Over 50";

}

console.log(lessThan(23)); OUTPUT: "Under 25" //TRUE
console.log(lessThan(25)); OUTPUT: "Under 50" //TRUE
console.log(lessThan(87)); OUTPUT: "Over 50" //FALSE

<--- LESS THAN EQUAL TO --->
// Less than equal to (<=)
// Less than equal to also converts data types

function lessEqual(val) {
    if(val <= 25) // if the entered value is LESS THAN OR EQUAL TO 25
        return "less than or eaqual to 25....Bitch"; //TRUE
    
    {
        if(val <= 50)
            return "less than or equal to 50...........Bitch" // TRUE

    }
            return "Why you a Bitch?" // FALSE 

}

console.log(lessEqual(23)); //OUTPUT: less than or equal to 25....Bitch --- TRUE
console.log(lessEqual('48')); // OUTPUT: less than or equal to 50....Btich ----- TRUE
console.log(lessEqual(98)); // OUTPUT: Why are you a Bitch? --- FALSE


/*END*/

<-- LOGICAL AND OPERATORS -->
// Logical AND operators (&&) returns TRUE if and only if the "OPERANDs" to the left and right of it are TRUE
function operAnd(Num) {
    if(Num >= 25 && Num <= 50) //if the value is  greater than equal to (>=) 25 LOGICAL and operator (&&) less than equal to (<=) 50 then the rerturn is TRUE ("Yes")
        return "Yes";
        {
            return "No"; // Otherwise anything less than 25 && greater than 50 is FALSE
        }

    }

console.log(operAnd(98));  //OUTPUT: Yes ----TRUE
console.log(operAnd(12));  //OUTPUT: No ----FALSE

/*END*/

<-- LOGICAL OR OPERATORS -->
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
/* END */

     <--- ELSE statements (else) --> //FINALLY!! 

//ELSE STATEMENT else 

function esleState(val) {


    if(val > 5) {
        return "Bigger than 5";
   
    }else { // IF its < 5 

    return "5 of smaller";
    }


}
console.log(esleState(98));
console.log(esleState(4));

<-- ELES IF statement -->


     //converts logic to ELSE if statement

function elseIf(val) {
    if (val > 10){ 
        return "More than 10"; /// if value is greater than 10 

}else if (val < 5) { 
    return "less than 5"; // else if value is less thatn 5
} else {
    return "Betweem 5 and 10" /// any number between 5 and 10
}

}
    

console.log(elseIf(14));  //true - More than 10
console.log(elseIf(3));  //true  - Less than 5
console.log(elseIf(8)); //false - between 5 and 10

/* END */


function orderMyFunction(val) {
    if(val < 5){
        return "Your guess is less that 5";

    } else if (val < 10) {
         return "Your guess is less than 10";
    } else {
        return "Your guess is more than 10";

    } 
}

console.log(orderMyFunction(3)); // Your guess is less than 5
console.log(orderMyFunction(6)); // Your guess is less than 10
console.log(orderMyFunction(12)); // Your guess is more than 10


<-- LOGICAL ORDER in ELSE IF statements -->

// NOTE order IS important with IF and ELSE IF statements
// Function works from TOP to BOTTOM

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


/* END */

<-- Chaining IF ELSE statements --> 

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


/* END */

<-- GOLF CODE -->
 
// Your function will be passed PAR and STROKES arguments
//  Depending on how far above or below PAR your STROKES are --- There are different nickenames

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) { 
  // Only change code below this line
    if (strokes == 1) { // if only one stroke is required then a HOLE-IN-ONE is returned
        return names[0];

    } else if (strokes <= par -2)  {
        return names[1];
    
    } else if (strokes == par -1) {
         return names[2]; 
             
    } else if (strokes == par){
        return names[3];

    } else if (strokes == par +1) {
        return names[4];
        
    } else if (strokes == par +2) {
        return names[5];

    } else if (strokes >= par +3) {
        return names[6]
        
    }
    
  // Only change code above this line
}

console.log(golfScore(1, 1)); //Hole-in-one!
console.log(golfScore(3, -2)); //Eagle
console.log(golfScore(3, 2)); //Birdie
console.log(golfScore(3, 3)); //Par
console.log(golfScore(3, 4)); //Bogey
console.log(golfScore(3, 5)); //Double-Bogey
console.log(golfScore(3, 7)); //Go Home!

/* END */ 

<-- using SWITCH STATEMENTS (in case you cant make up your mind) --> 

    // A switch statement can come in hand when you have a number of options to choose from      
   // Switch statements tests a value and can have various possible values 
  // CASE values are tested with strict equality (===)
 // (if a VAR were to have many options) --- 
//different actions with different conditions

 function caseSwitch(val){
    answer = ""; 

    switch(val) {  // similar  to IF conditions
        case 1:  // OPTION 1
        case "alpha": // OPTION 2
            answer = "move forward"; /// if 1 or alpha is logged in
        break; //  NOTE BREAK is required in order  to move on to the next CASE
        case 2:  // //OPTION 1
            answer = "beta";
        break;
        case 3:
             answer = "gamma";
        break;
        case 4:
             answer = "delta";

    }
    return answer /// REMINDER  (DONT FORGET)

}

console.log(caseSwitch("alpha"));

/* END */

<-- ADDING a DEFAULT option in a case swtitch statement -->

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

// More examples of using SWITCH STATEMENTS in place of iF/ELES statements

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

/* END */ 

<-- Returning Boolean values from function -->

function lessThan(a, b) {
    return a < b; 
}

console.log(lessThan(20, 100));
console.log(lessThan(100, 20)); // FLASE

/*END*/


//<-- Return early pattern for function --> 

//When a RETURN statement is reached, the execution of the current functionis tops and control returns the calling location
// The reurn statement stops the exicution of a function and returns a value from that function

function absTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined; 

    }
    
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  MATH.ROUND(X)
        /// X = #
        /// return value: The value of a given number rounded to the nearest integer
        /// Description: if the fractional portion of the argument is greater than 0.5, the argument is rounded to the next integer with the higher absolutevalue
        ///if it is less than 0.5, the argument is rounded to the integer with the lower absolute value
        /* EXAMPLES */
           // math.round(2.9) /// 3.0
          //  math.round(2.2) // 2.0    
         //   math.round(23.5)// 23.00
        //    math.round(23.6) //24.00


    MATH.POW(base, exponent)
        //Base: the base number
        //Exponent: the exponent used to raise the base
        //return value: A number representing the given base taken to the power of the given exponent 
            // NOTE A to the power of B 
           // A: BASE B: EXPONENT

        /*EXAMPLE*/
            // Math.pow(7,4) // 2401
           // Math.pow(2, 10) //1024



    MATH.SQRT(x)
         // X = number
        // return value: the square root of a given number    
       // math.sqrt(9) // 3



 console.log(absTest(-1.7,3)); ///Undefined
 console.log(absTest(-2, 2)); // RETURNS UNDEFINED 
 console.log(absTest(3,2))   //  

 /* END */

 <-- Counting c ards --> 

// ANCHOR EDGAR METHOD 1

var count = 0; // Player  starts with 0 

function cc(card) {
    if (card == 2 || card < 6) { 
        count ++;

    } switch(card) {
      case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
       count --;
    }

        var holdbet = 'hold';
            if (count > 0) {
                holdbet = 'bet'
            }

            return count + " " + holdbet;

    }

cc(2); cc(2); cc(5); cc('K'); cc(2);
console.log(cc())


//ANCHOR EDGAR METHOD 2 
var count = 0; // Player  starts with 0 

function cc(card) {
    if (card == 2 || card < 6) { 
        count += 1;

    } else if(card == 10 || card == 'j' || card == 'q' || card == 'k' || card == 'a') {
        count -= 1;
    }

        var holdbet = 'hold';
            if (count > 0) {
                holdbet = 'bet'
            }

            return count + " " + holdbet;

    }

cc(2); cc(2); cc(5); cc('K'); cc(2);
console.log(cc())


 // 1st METHOD
 var count = 0; // Start value is 0

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++; // ADD 1 
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--; // subtract 1
      break;
  }

  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet' // if the remaining count is larger than 0 then VAR holdbet will be changed to BET
  }

  return count + " " + holdbet;
  // Only change code above this line
  // " " is needed to include a space between remaining count and BET decision
}

cc(10); cc('Q'); cc('K'); cc('K'); cc('A');
console.log(cc(2)) 



// 2nd METHOD NOTE This method TOO LONG and would not REC 

var count = 0;


function cc(card) {
  // Only change code below this line
if (card == 2 || card == 3 || card == 4 || card ==5 || card ==6) { //FIXME this can be condensed with (< or >)  
   
    function cc(card) {
      // Only change code below this line
    if (card == 2 || card == 3 || card == 4 || card ==5 || card ==6) {
          //alert("2 3 4 5 6");
        count += 1;
      }
      else if (card == 7 || card == 8 || card == 9) {  // This doesnt seem like it // FIXME this is NOT needed/ code will know NOT to ADD if NOT included within function
          count += 0;
      }
      else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
          count -= 1;
      }
      if (count <= 0) {
          return String(count) + " Hold";
      }
      else {
          return String(count) + " Bet";
      }
      // Only change code above this line
    }
    
    cc(2); cc(3); cc(7); cc('K'); cc('A'); 
    console.log(cc(2))

var count = 0;



function cc(card) {
  // Only change code below this line
if (card == 2 || card == 3 || card == 4 || card ==5 || card ==6) {
  	//alert("2 3 4 5 6");
    count += 1;
  }
  else if (card == 7 || card == 8 || card == 9) {  // This doesnt seem like it
      count += 0;
  }
  else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
      count -= 1;
  }
  if (count <= 0) {
  	return String(count) + " Hold";
  }
  else {
  	return String(count) + " Bet";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A'); 
console.log(cc(2)) with 
  	//alert("2 3 4 5 6");
    count += 1;
  }
  else if (card == 7 || card == 8 || card == 9) {  // This doesnt seem like it
      count += 0;
  }
  else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
      count -= 1;
  }
  if (count <= 0) {
  	return String(count) + " Hold";
  }
  else {
  	return String(count) + " Bet";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A'); 
console.log(cc(2))

