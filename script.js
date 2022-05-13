const input1 = document.getElementById("I1");
const input2 = document.getElementById("I2");
const input3 = document.getElementById("I3");
const input4 = document.getElementById("I4");
const input5 = document.getElementById("I5");
const input6 = document.getElementById("I6");
const input7 = document.getElementById("I7");
const input8 = document.getElementById("I8");
const input9 = document.getElementById("I9");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
btns = document.getElementsByClassName("btn");

var today = moment();
$("#cTime").text(today.format("MMM Do YY, h:mm:ss a"));

btn1.addEventListener('click', function(event){
    var activity = input1.value;
    localStorage.setItem('activity', activity);
    console.log(localStorage);
})

btn2.addEventListener('click', function(event){
    var activity = input2.value;
    localStorage.setItem('activity', activity);
    console.log(localStorage);
})

btn3.addEventListener('click', function(event){
    var activity = input3.value;
    localStorage.setItem('activity', activity);
    console.log(localStorage);
})

btn4.addEventListener('click', function(event){
    var activity = input4.value;
    localStorage.setItem('activity', activity);
    console.log(localStorage);
})

btn5.addEventListener('click', function(event){
    var activity = input5.value;
    localStorage.setItem('activity', activity);
    console.log(localStorage);
})

btn6.addEventListener('click', function(event){
    var activity = input6.value;
    localStorage.setItem('activity', activity);
    console.log(localStorage);
})

btn7.addEventListener('click', function(event){
    var activity = input7.value;
    localStorage.setItem('activity', activity);
    console.log(localStorage);
})

btn8.addEventListener('click', function(event){
    var activity = input8.value;
    localStorage.setItem('activity', activity);
    console.log(localStorage);
})

btn9.addEventListener('click', function(event){
    var activity = input9.value;
    localStorage.setItem('activity', activity);
    console.log(localStorage);
})