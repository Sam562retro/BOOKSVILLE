function loginUser(){
        var password = document.getElementById('pass').value;
        var username = document.getElementById('user').value;
        if(username == 'flag' && password == 'getBoOkSNoWPlease'){
            location.href='main.html';
        }
        else{
          window.alert("WRONG PASSWORD !!!!")
        }
}
