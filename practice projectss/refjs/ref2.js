
var countvalue = document.getElementById("value");

// var btns1 = document.getElementsByClassName("btn1");
// var btns2 = document.getElementsByClassName("btn2");
// var btns3 = document.getElementsByClassName("btn3");

 var count = 0;

 d1 = () =>{
        count -= 1;
        countvalue.innerHTML  = count;
        // btns1.style.backgroundColor = red;

}
 r1 = () =>{
    count = 0;
    countvalue.innerHTML = count;
    // btns2.style.backgroundColor = blue;

}
 i1 = () =>{
    count += 1;
    countvalue.innerHTML = count;
    // btns3.style.backgroundColor = green;

}



















// var d1 = () =>{
//     if (count == 0 && count != 0 ){
//         count--;
//         // btns1.style.backgroundColor = red;
//     }
//     else if (count != 0)
//     {
//         count = 0;
//         // btns2.style.backgroundColor = blue;  
//     }
//     else 
//     {
//         count++;
//         // btns3.style.backgroundColor = green;  
//     }
// } 





























// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const styles = e.currentTarget.classList;
//     if (styles.contains("decrease")) {
//       count--;
//     } else if (styles.contains("increase")) {
//       count++;
//     } else {
//       count = 0;
//     }

//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     if (count === 0) {
//       value.style.color = "#222";
//     }
//     value.textContent = count;
//   });
// });