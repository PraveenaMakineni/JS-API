

function validate()

{

            var first= document.forms[“myform”][“fname”].value;

            var last= document.forms[“myform”][“lname”].value;

var date= document.forms[“myform”][“date”].value;

            var email= document.forms[“myform”][“email”].value;

            var phone= document.forms[“myform”][“phone”].value;

            var gender= document.forms[“myform”][“gender”].value;

            var address = document.forms[“myform”][“address”].value;

            var state= document.forms[“myform”][“state”].value;

            var hobby= document.getElementById(“hobby”);

// first name validation

if(first == “”)

            {

alert(“enter the name”);

            return false;

            }

if(!isNaN(first))

            {

            alert(“name should be in character”);

            return false;

            }

//last name validation

if(last == “”)

            {

            alert(“enter the last name”);

            return false;  }
