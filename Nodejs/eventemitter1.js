//import eventemitter module
const EventEmitter = require('events');
//create an instance of EventEmitter
const emitter = new EventEmitter();
//register an event listener for 'greet' event
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js EventEmitter.`);
}
);
//emit the 'greet' event with a name
emitter.emit('greet', 'Naveen');
 