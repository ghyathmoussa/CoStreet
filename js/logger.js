const Event = require('events');

const emmiter = new Event();

function log(msg) {
    console.log(msg);
    emmiter.on('connection', function () {
        console.log('connected');
    });
}

module.exports = log;