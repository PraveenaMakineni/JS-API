/*
var btnDOM = document.getElementsByTagName('button')[0];
if (btnDOM) {
    btnDOM.addEventListener('click', function () {
        var uname = "kumar", email = "kumar", phone = 7896541230
        document.getElementById('uname').innerText = uname
        document.getElementById('email').innerText = email
        document.getElementById('phone').innerText = phone
    })

}



*/


/*
document.getElementsByTagName('button')[0].addEventListener('click', function () {
    var uname = "kumar", email = "kumar", phone = 7896541230
    document.getElementById('uname').innerText = uname
    document.getElementById('email').innerText = email
    document.getElementById('phone').innerText = phone
})
*/

/*
var btnDOM = document.getElementsByTagName('button')[0];
btnDOM.addEventListener('click', function () {
    var uname = "kumar", email = "kumar", phone = 7896541230
    document.getElementById('uname').innerText = uname
    document.getElementById('email').innerText = email
    document.getElementById('phone').innerText = phone
})
*/


var btnDOM = document.querySelector('button');
btnDOM.addEventListener('click', function () {
    var uname = "js", email = "js@gmail.com", phone = 9999999999
    document.getElementById('uname').innerText = uname
    document.getElementById('email').innerText = email
    document.getElementById('phone').innerText = phone
})