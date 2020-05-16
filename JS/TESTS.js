
//A JS object one way to handle flexable data  
//They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects

var californiaHouseHold = [
	{
		"Adult": "Edgar",
		"height": "FiveFeet",
		"HairColor": "brown", 
		"Clothes": [ 
			"shirt",
			"shorts",
			"headphones",
			"beanie",
		],

		"Alive": true
	}, 

	{
		"dog": "otto",
		"breed": "snauzer",
		"color": "black",
		"fave_snacks": [
			"chicken",
			"pizza",
			"mondays"
		],

			"Alive": true
	
	}
]; 



console.log("Pet 1:" + JSON.stringify(californiaHouseHold[1]))/
