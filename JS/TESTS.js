/*var Homes = { 
california:" Los Angeles", oregon:"Portland", washington: "Vancouver" 
};

var newHome;
newHome = 'california';
var foundation = Homes[newHome];

console.log(foundation) // Los angeles */

//Example 2


var valObj = {
	gotoComputer: "Mac"

};
function mainMachine(str) {
	var important = "goto";
	return important + str;

}
var whichComputer =  mainMachine("Computer");
console.log(valObj[whichComputer]);





//Second Example

var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
