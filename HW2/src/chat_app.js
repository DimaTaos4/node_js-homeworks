import EventEmitter from 'node:events';

const emitter = new EventEmitter();
emitter.on("user-name", (name) => {
    console.log(`Hello ${name}`);
});
function sendMessage(user) {
    emitter.emit('user-name', user)
}


sendMessage('Andrew')
sendMessage('Tomas')