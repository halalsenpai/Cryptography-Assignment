
function Scrypt(){
    var str=document.getElementById('inputtext').value;
    var keyword= document.getElementById('key').value;
    var numbers = /^[0-9]+$/;

    if(str == ""){
        alert('Input Text to be Encypted');
        return;
    }
    else if(keyword == ""){
        alert('input the keyword');
    }
    else if(document.getElementById("key").value.match(numbers)){
        alert('what part of keyWORD do you not understand?bro just put in just alphabets');
    }
    else{
        var newstr=str.toUpperCase();

        var output='';


        for(var i = 0; i < newstr.length; i ++){
            var c =newstr[i];

            if (c.match(/[a-z]/i))
            {


                var code = newstr.charCodeAt(i);
                var og = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                var oga =og.charCodeAt(i);
                

                if ((code >= 65) && (code <= 90)){
                    var pos= code-65;
                    console.log(code);
                    console.log(pos);
                    output=output + keyword[pos];
            }
        }
            else{
                
                output = output + c;
            }
        
        console.log(output);
}
}
document.getElementById("result").innerHTML = output;
}

function Sdecrypt(){
    var str=document.getElementById('inputtext').value;
    var keyword= document.getElementById('key').value;
    var numbers = /^[0-9]+$/;

    if(str == ""){
        alert('Input Text to be Encypted/Decrypted');
        return;
    }
    else if(keyword == ""){
        alert('input the keyword');
    }
    else if(document.getElementById("key").value.match(numbers)){
        alert('what part of keyWORD do you not understand?bro just put in just alphabets');
    }
    else{
        var newstr=str.toUpperCase();

        

        var output='';


        for(var i = 0; i < newstr.length; i ++){
            var c =newstr[i];
            var index= keyword.indexOf(c);
            console.log(index);
            var code = newstr.charCodeAt(i);
            var og = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

            if (c.match(/[a-z]/i)){
                if ((code >= 65) && (code <= 90)){
                    output=output+ og[index];
                }

            }
            else
            output=output+c;

document.getElementById("result").innerHTML = output;
}
}
}
