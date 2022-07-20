function saveData(){
var wroteOne = document.getElementById('10').value
var wroteTwo = document.getElementById('11').value
var wroteThree = document.getElementById('12').value
var wroteFour = document.getElementById('1').value
var wroteFive = document.getElementById('2').value
var wroteSix = document.getElementById('3').value
var wroteSeven = document.getElementById('4').value
var wroteEight = document.getElementById('4').value

var wrotedOne = JSON.stringify(wroteOne)
var wrotedTwo = JSON.stringify(wroteTwo)
var wrotedThree = JSON.stringify(wroteThree)
var wrotedFour = JSON.stringify(wroteFour)
var wrotedFive = JSON.stringify(wroteFive)
var wrotedSix = JSON.stringify(wroteSix)
var wrotedSeven = JSON.stringify(wroteSeven)
var wrotedEight = JSON.stringify(wroteEight)
var wrote = document.getElementById('content').value
var wroted = JSON.stringify(wrote)
localStorage.setItem('data',wroted)
localStorage.setItem('dataOne',wrotedOne)
localStorage.setItem('dataTwo',wrotedTwo)
localStorage.setItem('dataThree',wrotedThree)
localStorage.setItem('dataFour',wrotedFour)
localStorage.setItem('dataFive',wrotedFive)
localStorage.setItem('dataSix',wrotedOne)
localStorage.setItem('dataSeven',wrotedOne)
localStorage.setItem('dataEight',wrotedOne)
localStorage.setItem('dataNine',wrotedOne)
}

function saveDataOne(){
    var wroteOne = document.getElementById('10').value
    var wrotedOne = JSON.stringify(wroteOne)
    localStorage.setItem('dataOne',wrotedOne)
}

function saveDataTwo(){
    var wroteTwo = document.getElementById('11').value
    var wrotedTwo = JSON.stringify(wroteTwo)
    localStorage.setItem('dataTwo',wrotedTwo)
}

function saveDataThree(){
    var wroteThree = document.getElementById('12').value
    var wrotedThree = JSON.stringify(wroteThree)
    localStorage.setItem('dataThree',wrotedThree)
}

function saveDataFour(){
    var wroteFour = document.getElementById('1').value
    var wrotedFour = JSON.stringify(wroteFour)
    localStorage.setItem('dataFour',wrotedFour)
}

function saveDataFive(){
    var wroteFive = document.getElementById('2').value
    var wrotedFive = JSON.stringify(wroteFive)
    localStorage.setItem('dataFive',wrotedFive)
}

function saveDataSix(){
    var wroteSix = document.getElementById('3').value
    var wrotedSix = JSON.stringify(wroteSix)
    localStorage.setItem('dataSix',wrotedSix)
}

function saveDataSeven(){
    var wroteSeven = document.getElementById('4').value
    var wrotedSeven = JSON.stringify(wroteSeven)
    localStorage.setItem('dataSeven',wrotedSeven)
}

function saveDataEight(){
    var wroteEight = document.getElementById('5').value
    var wrotedFour = JSON.stringify(wroteFour)
    localStorage.setItem('dataEight',wrotedFour)
}




function getData(){
    if (localStorage.getItem('data') == null){
        localStorage.setItem('data', '');}
    if (localStorage.getItem('dataOne') == null){
        localStorage.setItem('dataOne', '');}
    if (localStorage.getItem('dataTwo') == null){
        localStorage.setItem('dataTwo', '');}
    if (localStorage.getItem('dataThree') == null){
        localStorage.setItem('dataThree', '');}
    if (localStorage.getItem('dataFour') == null){
        localStorage.setItem('dataFour', '');}
    if (localStorage.getItem('dataFive') == null){
        localStorage.setItem('dataFive', '');}
    if (localStorage.getItem('dataSix') == null){
        localStorage.setItem('dataSix', '');}
    if (localStorage.getItem('dataSeven') == null){
        localStorage.setItem('dataSeven', '');}
    if (localStorage.getItem('dataEight') == null){
        localStorage.setItem('dataEight', '');}
    var wroter = JSON.parse(localStorage.getItem('data'))
    var wroterOne = JSON.parse(localStorage.getItem('dataOne'))
    var wroterTwo = JSON.parse(localStorage.getItem('dataTwo'))
    var wroterThree = JSON.parse(localStorage.getItem('dataThree'))
    var wroterFour = JSON.parse(localStorage.getItem('dataFour'))
    var wroterFive = JSON.parse(localStorage.getItem('dataFive'))
    var wroterSix = JSON.parse(localStorage.getItem('dataSix'))
    var wroterSeven = JSON.parse(localStorage.getItem('dataSeven'))
    var wroterEight = JSON.parse(localStorage.getItem('dataEight'))
    var wroterNine = JSON.parse(localStorage.getItem('dataNine'))
    document.getElementById('10').innerHTML = wroterOne
    document.getElementById('content').innerHTML=wroter
    document.getElementById('11').innerHTML=wroterTwo
    document.getElementById('12').innerHTML=wroterThree
    document.getElementById('1').innerHTML=wroterFour
    document.getElementById('2').innerHTML=wroterFive
    document.getElementById('3').innerHTML=wroterSix
    document.getElementById('4').innerHTML=wroterSeven
    document.getElementById('5').innerHTML=wroterEight
}



function savedFunction(){
    var new_data = document.getElementById("save")

    if (localStorage.getItem('data') == null){
        localStorage.setItem('data', '[]');
    }
    
    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);
    
    localStorage.setItem('data', JSON.stringify(old_data));
    localStorage.getItem('data')
    
}

//console.log(localStorage)


/*function savedFunction() {
    let save = document.querySelector(".myclass")
    save.value = localStorage.getItem("notes")
    save.addEventListener("keyup", event=>{
    localStorage.setItem("notes",save.value)
});
}
savedFunction();*/

//document.onload.getData