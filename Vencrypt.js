

function vencrypt(){
    var str1=document.getElementById('inputtext').value;
    var keyword= document.getElementById('key').value;
    console.log(keyword);
    var str=str1.toUpperCase();
    
if(str == ""){
    alert('Input the string first idiot');
    return;
}
else if (document.getElementById("key").value.length == 0) {
    alert("Key is empty");
    return;
} 
var newkey = keyword.repeat(10);
console.log(newkey);
var newk=newkey.slice(0,str.length);
console.log(newk);
var keyfinal=newkey.toUpperCase();
console.log(keyfinal);



var letters = /^[A-Za-z]+$/;

if(keyword.match(letters)){
   
    var output = '';

	for (var i = 0; i < str.length; i ++) {


		var c = str[i];

		if (c.match(/[a-z]/i)) {

            var code= Number(str.charCodeAt(i));
            //var code = str.charCodeAt(i);
            var key = Number(keyfinal.charCodeAt(i));

			if ((code >= 65) && (code <= 90)){
				c = String.fromCharCode(((code + key) % 26) + 65);

        }

			// else if ((code >= 97) && (code <= 122))
			// 	c = String.fromCharCode(((code + key) % 26) + 97);

		}

		output = output+c;

}
document.getElementById("result").innerHTML = output;
    

console.log('vigenere');
}
else{
    alert("Please Input a Valid String")
}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////

function Vdecrypt(){
    var str=document.getElementById('inputtext').value;
    var keyword= document.getElementById('key').value;
    console.log(str);
    console.log(keyword);
if(str == ""){
    alert('Input the string first idiot');
    return;
}
else if (document.getElementById("key").value.length == 0) {
    alert("Key is empty");
    return;
} 
var newkey = keyword.repeat(10);
console.log(newkey);
var newk=newkey.slice(0,str.length);
var keyfinal=newkey.toUpperCase();
console.log(keyfinal);
   
    var output = '';

	for (var i = 0; i < str.length; i ++) {


		var c = str[i];

		if (c.match(/[a-z]/i)) {

            var code= Number(str.charCodeAt(i));
            //var code = str.charCodeAt(i);
            var key = Number(keyfinal.charCodeAt(i));

			if ((code >= 65) && (code <= 90)){
                c = String.fromCharCode(((code - key +26) % 26) + 65);
                // console.log('code :' + code);
                // console.log('key  :' + key);
                // console.log('character' + c);

        }

			// else if ((code >= 97) && (code <= 122))
			// 	c = String.fromCharCode(((code - key) % 26) + 97);

		}

		output = output+c;

}
document.getElementById("result").innerHTML = output;
    


}

