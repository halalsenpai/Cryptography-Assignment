

function myCipher(){
var str=document.getElementById('inputtext').value;
var amount= document.getElementById('key').value;

if (document.getElementById("inputtext").value.length == 0) {
    alert("My mans put in some text first");
	return;
}

if (document.getElementById("key").value.length == 0) {
    alert("Key is empty brother");
	return;
}

var numbers = /^[0-9]+$/;
if(document.getElementById("key").value.match(numbers)){

var a=Number(amount);


	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];
													//console.log(c);

		if (c.match(/[a-z]/i)) {


			var code = str.charCodeAt(i);

													//console.log(code);
			// Uppercase letters
			if ((code >= 65) && (code <= 90)){
				c = String.fromCharCode(((code - 65  + a) % 26) + 65);
				//c = String.fromCharCode(code+a);

				//console.log(code + a);

			}
			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + a) % 26) + 97);

		}

		output = output+c;
		//console.log(output);

	}

	// All done!
	document.getElementById("result").innerHTML = output;
	

}
else	
		{
			alert('BRUH! Caesar only accepts numbers as the key');
			return;
		}

};

function Cdecrypt(){
	var str=document.getElementById('inputtext').value;
	var amount= document.getElementById('key').value;
	var a=Number(amount);

	newkey=(26-a)%26;

	//console.log(newkey);
	
		// Make an output variable
		var output = '';
	
		// Go through each character
		for (var i = 0; i < str.length; i ++) {
	
			// Get the character we'll be appending
			var c = str[i];
														//console.log(c);
	
			if (c.match(/[a-z]/i)) {
	
	
				var code = str.charCodeAt(i);
	
														//console.log(code);
				// Uppercase letters
				if ((code >= 65) && (code <= 90)){
					c = String.fromCharCode(((code - 65  + newkey) % 26) + 65);
					//c = String.fromCharCode(code+a);
	
					//console.log(code + a);
	
				}
				// Lowercase letters
				else if ((code >= 97) && (code <= 122))
					c = String.fromCharCode(((code - 97 + newkey) % 26) + 97);
	
			}
	
			output = output+c;
			//console.log(output);
	
		}
	
		// All done!
		return document.getElementById("result").innerHTML = output;
	
	};


