var result = (uname, email, phone) => {
    document.getElementById('uname').innerText = uname
    document.getElementById('email').innerText = email
    document.getElementById('phone').innerText = phone

}

//result("kumar","kumar@gmail.com",7896541230)

var btnDOM = document.querySelector('button');
btnDOM.addEventListener('click', result("kumar", "kumar@gmail.com", 7896541230))