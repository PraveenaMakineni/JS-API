/* Form Handlings  */

var form_validations = () => {

    var name = document.querySelector('#name').value
    var email = document.querySelector('#email').value
    var pwd = document.querySelector('#pwd').value
    var cpwd = document.querySelector('#cpwd').value
    var phone = document.querySelector('#phone').value


    if (name == undefined || name == "") {
        document.getElementById('name1').innerText = "Enter ur name"
        return false
    }
    else if (email == undefined || email == "") {
        document.getElementById('email1').innerText = "Enter ur email"
        return false
        
    }
    else if (pwd == undefined || pwd == "") {
        document.getElementById('pwd1').innerText = "Enter Password"
        return false
        
    }
    else if (cpwd == undefined || cpwd == "") {
        document.getElementById('cpwd1').innerText = " Confirm Password"
        return false
        
    }
    else if (phone == undefined || phone == "") {
        document.getElementById('phone1').innerText = "Enter Confirm Password"
        
        
    }
    else if (pwd == cpwd) {
        window.alert("Both are Matched")
    }
    else {
        document.getElementById('cpwd').innerText = "Both details are Not Matched"
        
    }
}