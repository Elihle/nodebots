# How to change CSS from the back-end

This is an example of a project of how to trigger an change in your front-end from the back-end using `socket.io`.

It's using socket.io (in `server.js`) to send trigger an event called `change` from the back-end using `setInterval` every 2 seconds. It use a counter to determine what value to send to the client.

The client side (in `client.js`) code is listening for the `change` event using:

```javascript
io.on('change', function(data) {
    // data contains info sent from the server side
    // this can now be used with the DOM
})
```

## To install

Clone this repository on to disk. 
Install all dependencies using `npm install`.
Run the project using `nodemon` or `node index.js`

Open `http://localhost:3001` in the browser see the block changing color.
