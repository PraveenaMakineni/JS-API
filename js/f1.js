var tno = 2, res = "";
for (var i = 1; i <= 10; i++) {
    res += `${tno} X ${i}=${tno * i} <br />`
}


/*
document.getElementsByTagName('div')[0].innerHTML = res
document.getElementsByTagName('div')[1].innerHTML = res
document.getElementsByTagName('div')[2].innerHTML = res
document.getElementsByTagName('div')[3].innerHTML = res
document.getElementsByTagName('div')[4].innerHTML = res
document.getElementsByTagName('div')[5].innerHTML = res
document.getElementsByTagName('div')[6].innerHTML = res
*/

/*
for (var index = 0; index <= document.getElementsByTagName('div').length; index++) {
    document.getElementsByTagName('div')[index].innerHTML = res
}
*/

for (var index = 0; index <= document.getElementsByClassName('c1').length; index++) {
    document.getElementsByClassName('c1')[index].innerHTML = res
}

//document.querySelectorAll('div').innerHTML
//document.querySelectorAll('.c1').innerHTML
