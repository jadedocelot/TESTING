function nextinLine(arr,item) {
    arr.push();
    return arr.shift();

}

var testArr = [1,2,3,4,5];

console.log("Before:" + JSON.stringify(testArr));
console.log(nextinLine (testArr, 6));
console.log("After:" + JSON.stringify(testArr));


