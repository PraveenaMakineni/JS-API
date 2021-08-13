let containerr = document.getElementById('containerr')
for (let i = 1; i < 65; i++) {
    let elm = document.createElement('button')
    elm.className = "btn"
    // elm.id = "btnid"
    containerr.appendChild(elm)
    // document.getElementById('btnid').style.backgroundColor = "black"
}
var a = 1;
var price = 100;

for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
    document.getElementsByTagName("button")[i].addEventListener("click", function () {
        document.getElementsByTagName('button')[i].style.backgroundColor = "green"
        var count = document.getElementById('count');
        var haj = ${a * price};
        count.innerHTML = you have selected ${a} seats for a price of &#8377;${haj};
        a++;
    })
}