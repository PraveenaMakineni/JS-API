/* Form Handlings  */

var form_validations = () => {

    var pwd = document.querySelector('#pwd').value
    var cpwd = document.querySelector('#cpwd').value

    if (pwd == undefined || pwd == "") {
        document.getElementById('pwd_err').innerText = "Enter Password"
        return false
    }
    else if (cpwd == undefined || cpwd == "") {
        document.getElementById('cpwd_err').innerText = "Enter Confirm Password"
        
    }
    else if (pwd == cpwd) {
        window.alert("Both are Matched")
    }
    else {
        document.getElementById('cpwd_err').innerText = "Both details are Not Matched"
        
    }
}