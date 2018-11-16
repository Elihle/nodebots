const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// const server = require('http').Server(app);
// const io = require('socket.io')(server);

const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function () {

    var proximity = new five.Proximity({
        controller: "HCSR04",
        pin: 7,
        freq: 250
    });

    // led


    io.on('connection', function () {
        let counter = 0;


        proximity.on("data", function () {

            let color = '';

            let distance = this.cm;
            console.log(distance);
            if (distance < 20) {
                color = 'red'
            } else if (distance > 20 && distance < 30) {
                color = 'amber';
            } else {
                color = 'green';
            }
            console.log(color);

            // if (counter === 1) {
            //     color = 'green';
            // } else if (counter === 2) {
            //     color = 'amber';
            // } else if (counter === 3) {
            //     color = 'red';
            // } else {
            //     counter = 0;
            // }

            io.emit('change', {
                color
            });
            // counter++;


            // console.log("inches: ", this.inches);
            //console.log("cm: ", this.cm);
        });

        // setInterval(function () {
        //     let color = '';
        //     if (counter === 1) {
        //         color = 'green';
        //     } else if (counter === 2) {
        //         color = 'amber';
        //     } else if (counter === 3) {
        //         color = 'red';
        //     } else {
        //         counter = 0;
        //     }
        //     io.emit('change', { color });
        //     counter++;
        // }, 2000);
    });


});


app.use(express.static('public'));



const PORT = process.env.PORT || 3001;
server.listen(PORT, function () {
    console.log('Server running on', PORT);
});