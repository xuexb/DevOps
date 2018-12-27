const logger = require('fluent-logger');

logger.configure('fluentd.test', {
    host: '127.0.0.1',
    port: 24224,
    timeout: 3.0,
    reconnectInterval: 60000, // 10 minutes
});

logger.emit('follow', { from: 'userA', to: 'userB' });
