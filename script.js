let nowTime = moment().format("dddd, MMMM Do YYYY");
let hourTime = moment().format("h");
let current24 = moment().format("HH");

const hr9 = $("#hour1");
const hr10 = $("#hour2"); 
const hr11 = $("#hour3");
const hr12 = $("#hour4"); 
const hr1 = $("#hour5");
const hr2 = $("#hour6"); 
const hr3 = $("#hour7"); 
const hr4 = $("#hour8"); 
const hr5 = $("#hour9");  

let btn1 = $("#btn1");

$("#btn1").click(function() {
    localStorage.setItem("#text3").text()
})