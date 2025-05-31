import EventEmitter from 'node:events';



const chatEmitter = new EventEmitter();

function sendMessage(username, message, emitter) {
    emitter.emit('message', { username, message });
}

chatEmitter.on('message', ({ username, message }) => {
    console.log(`${username}: ${message}`);
});

sendMessage('Дмитрий', 'Привет всем!', chatEmitter);
sendMessage('Богдан', 'Как дела?', chatEmitter);
sendMessage('Василий', 'Присоединяюсь к чату!', chatEmitter);
