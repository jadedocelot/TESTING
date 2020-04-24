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
