const fluent = require('fluent-logger');
const moment = require('moment');

class Logger {
    /**
     * 构造函数
     *
     * @constructor
     * @param {Object} options 配置参数
     */
    constructor(options) {
        this.options = {...Logger.defaults, ...options};
        this.logger = fluent.createFluentSender('node', this.options);
    }

    /**
     * 执行日志
     *
     * @param {string} type 日志类型
     * @param {Object|string} data 日志数据
     * @return {Object}
     */
    exec(type, data) {
        if (typeof data === 'string') {
            data = {
                message: data,
            };
        }

        return this.logger.emit(this.options.env, {
            ...data,
            ...{
                env: this.options.env,
                env_source: 'node',
                env_level: type,
                env_timestamp: moment().format(),
            }
        });
    }

    /**
     * 输入 info 等级日志
     *
     * @param {Object|string} data 日志数据
     * @return {Object}
     */
    info(data) {
        return this.exec('info', data);
    }

    /**
     * 输入 error 等级日志
     *
     * @param {Object|string} data 日志数据
     * @return {Object}
     */
    error(data) {
        return this.exec('error', data);
    }

    /**
     * 输入 debug 等级日志
     *
     * @param {Object|string} data 日志数据
     * @return {Object}
     */
    debug(data) {
        return this.exec('debug', data);
    }

    /**
     * 输入 warn 等级日志
     *
     * @param {Object|string} data 日志数据
     * @return {Object}
     */
    warn(data) {
        return this.exec('warn', data);
    }
}

/**
 * 默认配置
 *
 * @type {Object}
 */
Logger.defaults = {
    env: 'default',
    host: 'Fluentd',
    port: 24224,
    timeout: 3.0,
    reconnectInterval: 600000,
};

module.exports = Logger;
