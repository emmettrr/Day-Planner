let nowTime = moment().format("dddd, MMMM YYYY");
let currentHour = moment().format("h");
const hr9 = $("#hour1");
const hr10 = $("#hour2"); 
const hr11 = $("#hour3");
const hr12 = $("#hour4"); 
const hr13 = $("#hour5");
const hr14 = $("#hour6"); 
const hr15 = $("#hour7"); 
const hr16 = $("#hour8"); 
const hr17 = $("#hour9");
const rows = document.getElementsByClassName('row')

let btn = $("#btn");

$("#btn1").click(function() {
    localStorage.setItem("#text3").text();
})

$("#currentDay").text(moment().format("dddd, MMMM YYYY"))

Array.from('row').forEach(row => {
    let rowIDString= row.id,
    rowHour;
if (rowIDString) {
    rowHour = parseInt(rowIDString);
}
if (rowHour) {
    if (currentHour === rowHour) {
        setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
        setColor(row, "green");

    } else if ((currentHour < rowHour) && (currentHour > rowHour + 6)) {
        setColor(row, "lightgrey");
    } else {
        setColor(row,"white");
    }
}
});