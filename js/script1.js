var result = () => {
    var uname = "kumar", email = "kumar", phone = 7896541230
    document.getElementById('uname').innerText = uname
    document.getElementById('email').innerText = email
    document.getElementById('phone').innerText = phone

}

//result()

var btnDOM = document.querySelector('button');
btnDOM.addEventListener('click', result)