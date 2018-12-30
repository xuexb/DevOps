const logger = require('fluent-logger').createFluentSender('node', {
    host: 'localhost',
    port: 24224,
    timeout: 3.0,
    reconnectInterval: 600000,
});

logger.emit('follow', {
    from: 'userA',
    to: 'userB',
    t: Date.now(),
});
