var event = require("events");

var eventEmitter=new event.EventEmitter();
eventEmitter.on("connection",function(req,res){
    eventEmitter.emit("data received");
})
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
    console.log('data received succesfully.');
 });
 
 // Fire the connection event 
 eventEmitter.emit('connection');
 