/* function phoneticLookup(val) {
	var result = "";
  
	  var lookup = {
	  	"alpha":"Adams",
	  	"bravo":"Boston",
	  	"charlie":"Chicago",
	  	"delta":"Denver",
	  	"echo": "Easy",
	  	"foxtrot": "Frank",
	};
	  var value = val;
	  result = lookup[value];
  
	return result;
  }

  console.log(phoneticLookup("delta")) // Denver */


  function whatsForDinner(val){
	result = ""; //result will return  a string
	
	var dinnerOptions = { /// Our object using in place of a SWITCH/CASE 
		//Keyvalue pairs listed below 
		1:"Greek", //value 1 
		2:"Itallian", //value 2
		3:"Indian", // value 3
		4:"Mexican" //value 4  


 
		
	};

	var value = val; // var for (whatForDinner) function
		result = dinnerOptions[value];


		return result;
	}

		console.log(whatsForDinner(1))