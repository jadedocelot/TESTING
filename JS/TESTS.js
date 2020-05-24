var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total) // OUTPUT: 20 

/// initialization: var i = 0; -- This will start the count at 0, and since this us being applied to tbove array the starting point will be 2
// condition: i < myArray.length, in this case the last interation is i === 4 which is 6 
// i ++ will sift through the array 1 by 1

// total += myArray [i]; = add the array (myArry) to total(starting with zero)
   //[i] Add up each number within the array 1 by 1 

  