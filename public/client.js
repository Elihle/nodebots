var socket = io();

var green = document.querySelector('.green');
var amber = document.querySelector('.amber');
var red = document.querySelector('.red');



socket.on('change', function (data) {
    // console.log(data);
    green.classList.add('off');
    amber.classList.add('off');
    red.classList.add('off');

    if (data.color === 'green') {
        green.classList.remove("off");

    } else if (data.color === 'amber') {
        amber.classList.remove("off");

    } else {
        red.classList.remove("off");

    }



});