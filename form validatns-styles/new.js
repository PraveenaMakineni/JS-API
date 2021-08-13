/* Form Handlings  */

var form_validations = () => {

    //Target_Inputs
    var unameDOM = document.getElementById('uname')
    var emailDOM = document.getElementById('email')
    var pwdDOM = document.getElementById('pwd')
    var tst1 = document.getElementById('txt')
    var select1 = document.getElementById('choose1')
      
   /*******radio button ********/
   var ychecked = document.getElementById('ry').checked;
   var nchecked = document.getElementById('rn').checked;

   var ychecked1 = document.getElementById('ryerr');
   /*******radio button ********/
         
   /*******checkbox button ********/
   var jchecked = document.getElementById('js').checked;
   var rchecked = document.getElementById('reactjs').checked;
   var ndchecked = document.getElementById('nodejs').checked;
   var achecked = document.getElementById('angularjs').checked;
  
   var spanerr = document.getElementById('err');
   /*******checkbox button ********/

                        
  //Err_DOM
    var unameErr = document.getElementById('uname_err')
    var emailErr = document.getElementById('email_err')
    var pwdErr = document.getElementById('pwd_err')
    var nutter = document.getElementById('texterr')
    var selecterr = document.getElementById('cherr')

   //Icons
    var wrong = `<i class="fas fa-power-off"></i>`

    

    //Conditions..
    if (uname.value == undefined || uname.value == "") {
        unameErr.innerHTML = `${wrong} Enter Your name`
        unameErr.style.color = "red"
        unameDOM.style.border = "1px solid red"
        return false
    }
    else if (!uname.value.match(/^[a-z]+$/)) {
        unameErr.innerHTML = `${wrong} Name must be Alphabets [a-z]...`
        unameErr.style.color = "red"
        unameDOM.style.border = "1px solid red"
        return false
    }
    else {
        document.getElementById('uname_err').innerText = ""
        unameDOM.style.border = "1px solid #e5e5e5"
    }


    if (email.value == undefined || email.value == "") {
        emailErr.innerHTML = `${wrong} Enter Your Email`
        emailErr.style.color = "red"
        emailDOM.style.border = "1px solid red"
        return false
    }
    else if (!email.value.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/)) {
        emailErr.innerHTML = `${wrong} Enter Valid Email name@domain.ext`
        emailErr.style.color = "red"
        emailDOM.style.border = "1px solid red"
        return false
    }
    else {
        emailErr.innerText = ""
        emailDOM.style.border = "1px solid #e5e5e5"
    }



    if (pwd.value == undefined || pwd.value == "") {
        pwdErr.innerHTML = `${wrong} Enter Your Password`
        pwdErr.style.color = "red"
        pwdDOM.style.border = "1px solid red"
        return false
    }
    else if (!pwd.value.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/)) {
        pwdErr.innerHTML = `${wrong} Pwd must be 1-uppercase, Lowercase, Number, SpecialCharacter`
        pwdErr.style.color = "red"
        pwdDOM.style.border = "1px solid red"
        return false
    }
    else {
        pwdErr.innerText = ""
        pwdDOM.style.border = "1px solid #e5e5e5"
    }

    if (tst1.value == undefined || tst1.value == "") {
        nutter.innerHTML = `${wrong} Enter Your Address`
        nutter.style.color = "red"
        tst1.style.border = "1px solid red"
        return false
    }
    else if (!tst1.value.match(/^[a-z]+$/)) {
        nutter.innerHTML = `${wrong} Address must be in Lowercase`
        nutter.style.color = "red"
        tst1.style.border = "1px solid red"
        return false
    }
    else {
        nutter.innerText = ""
        tst1.style.border = "1px solid #e5e5e5"
    }


    if(select1.value=="select an option"){
        selecterr.innerHTML= "Enter an option"
        selecterr.style.color="red"
        select1.style.border="1px solid red"
        return false
    }
    else{
        selecterr.innerHTML= ""
        select1.style.border="1px solid #e5e5e5"
    }
    if(ychecked==false && nchecked==false){
        ychecked1.innerHTML="Please check any option"
        ychecked1.style.color= "red"
        ychecked1.style.border="1px solid #e5e5e5"

        return false
    }

    if(jchecked==false && rchecked==false && ndchecked==false && achecked==false){
        spanerr.innerHTML="Please check your options"
        spanerr.style.color= "red"
        return false
    }

    
    }   
    