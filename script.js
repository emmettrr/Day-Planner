let nowTime = moment().format("dddd, MMMM YYYY");
let currentHour = parseInt(moment().format("H"));
const rows = document.getElementsByClassName('row')
const saveBtn = $('.row').children('.btn');
var text = document.getElementById('text')
var hour = document.getElementById('hour1')

$("#currentDay").text(moment().format("dddd, MMMM YYYY"))

saveBtn.click(function(event) {
    event.preventDefault();
    var textInput = $(this.parentNode).children('.content').attr('id');
    var inputToStorage = $(this.parentNode).children('.content').val();
    localStorage.setItem(textInput, inputToStorage);
})

for (let index = 1; index < 9; index++) {
    $(`#text${index}`).text(localStorage.getItem(`text${index}`));
}

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
        setColor(row, "grey");
    } else {
        setColor(row, "lightgrey");
    }
}
});

function setColor(element, color) {
    element.style.backgroundColor = color;
  }

