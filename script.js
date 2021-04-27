let nowTime = moment().format("dddd, MMMM YYYY");
let currentHour = parseInt(moment().format("H"));
const rows = document.getElementsByClassName('row')
const btn1 = $("#btn1");
const btn2 = $("#btn2");
const btn3 = $("#btn3");
const btn4 = $("#btn4");
const btn5 = $("#btn5");
const btn6 = $("#btn6");
const btn7 = $("#btn7");
const btn8 = $("#btn8");
const btn9 = $("#btn9");
const text1 = $("#text1")
const text2 = $("#text2")
const text3 = $("#text3")
const text4 = $("#text4")
const text5 = $("#text5")
const text6 = $("#text6")
const text7 = $("#text7")
const text8 = $("#text8")
const text9 = $("#text9")

$("#btn1").click(function() {
    localStorage.setItem("")
})

$("#currentDay").text(moment().format("dddd, MMMM YYYY"))

Array.from(rows).forEach(row => {
    let rowIDString = row.id,
    rowHour;
if (rowIDString) {
    rowHour = parseInt(rowIDString);
}
if (rowHour) {
    if (currentHour === rowHour) {
        setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour >= rowHour - 6)) {
        setColor(row, "green");
    } else if ((currentHour < rowHour) && (currentHour <= rowHour + 6)) {
        setColor(row, "darkgrey");
    } else {
        setColor(row, "lightgrey");
    }
}
});

function setColor(element, color) {
    element.style.backgroundColor = color;
  }

