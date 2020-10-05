function encrypt(){
    var str=document.getElementById('inputtext').value;
    var amount= document.getElementById('key').value;
    console.log(str);


    if (document.getElementById('ctype').value=="Caesars Cipher"){
    console.log('Caesars');
    myCipher();

    }

    else if(document.getElementById('ctype').value=="Vigenere Cipher"){
        
    
        vencrypt();

    }
    else if(document.getElementById('ctype').value=="Playfair Cipher"){
        enplay();

    }
    else if(document.getElementById('ctype').value=="Railfence Cipher"){
        REncrypt();

    }
    else if(document.getElementById('ctype').value=="Substitution Cipher"){

        Scrypt();

    }
}

function decrypt(){
    if (document.getElementById('ctype').value=="Caesars Cipher"){
        console.log('Caesars');
        Cdecrypt();
    
        }
    
        else if(document.getElementById('ctype').value=="Vigenere Cipher"){
        
            Vdecrypt();
    
        }
        else if(document.getElementById('ctype').value=="Playfair Cipher"){
            deplay()
    
        }
        else if(document.getElementById('ctype').value=="Railfence Cipher"){
            RDecrypt();
    
        }
        else if(document.getElementById('ctype').value=="Substitution Cipher"){
    
            Sdecrypt()
    
        }

}
function whichCipher(){
    if(document.getElementById('ctype').value=="Substitution Cipher"){
        
        function shuffle(s) {
            var arr = s.split('');           // Convert String to array
            
            arr.sort(function() {
              return 0.5 - Math.random();
            });  
            s = arr.join('');                // Convert Array to string
            return s;                        // Return shuffled string
          }
          var s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        
        s= shuffle(s);

        document.getElementById('key').value=s;
        console.log('function working')}
        
        
        else{

        document.getElementById('key').value='';
    }
}