const container = document.getElementsByClassName("containerscreen");
const seat = document.querySelectorAll(".seat");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieselect = document.getElementById("sm")

 let ticketPrice = +movieselect.value;
//  console.log(typeof ticketPrice);

function updateSelectedCount (){
        const selectedseats = document.querySelectorAll('.row .seat .selected');
        const selectedseatscount = selectedseats.length;
        count.innerText = selectedseatscount;
        total.innerText = selectedseatscount * ticketPrice;
    }
container.addEventListener('click', (e) => {
        if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
          e.target.classList.toggle('selected');
        updateSelectedCount();
        }
    });
movieselect.addEventListener('change', (e) => {
        ticketPrice = +e.target.value;
        // setMovieData(e.target.selectedIndex, e.target.value);
        updateSelectedCount();
    });
























// console.log(ticketprice);
// container.addEventListener('click',(e)=>{
//     if(e.target.classList.contains('seat')&&!e.target.classList.contains('occupied'){
//     e.target.classList.toggle('selected');
//    }
// })