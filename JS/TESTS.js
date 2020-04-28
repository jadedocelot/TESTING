function nextInLine(arr, item) {
	arr.push(item);
	return arr.shift();

}

var testerArr = [1,2,3,4,5];

console.log("Before:" + JSON.stringify(testerArr));
console.log(nextInLine (testerArr, 6));
console.log("After:" + JSON.stringify(testerArr));