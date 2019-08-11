# EFK 接入 Nginx + Node.js


## 服务

- Nginx - Web Server ，代理 Node.js 、Kibana 
- Elasticsearch - 索引
- Fluentd - 日志收集
- Kibana - 可视化展示平台

## 域名规则

需要配置本地 Hosts ：`127.0.0.1 fe.com www.fe.com www2.fe.com kibana.fe.com node.fe.com` 。

- `www.fe.com` - 测试 www 首页
- `www2.fe.com` - 测试 www2 首页
- `kibana.fe.com` - 日志监控平台
- `node.fe.com` - 模拟一个 Node.js 后端服务

## 端口说明

- `80` - Nginx 暴露 Web Server 端口
- `9200` - Elasticsearch 内部端口
- `5610` - Kibana 内部端口，对外访问由 Nginx 代理到 `kibana.fe.com`
- `8989、8988` - Fluentd 内部 UDP 端口

## 目录

```
├── README.md
├── docker-compose.yml
├── fluentd                             - Fluentd 编译
│   ├── Dockerfile
│   ├── conf
│   │   ├── node.conf                   - Node.js 日志配置
│   │   ├── nginx-access.conf           - Nginx access 日志收集配置
│   │   └── nginx-error.conf            - Nginx error 日志收集配置
│   ├── fluent.conf                     - Fluentd 配置
│   └── plugins
├── html
│   ├── error                           - 一个测试目录，为了测试 403
│   └── index.html                      - 一个测试页面
├── nginx
│   ├── nginx.conf                      - Nginx 主配置
│   └── vhost
│       ├── node.conf                   - node.fe.com 配置
│       ├── kibana.conf                 - kibana.fe.com 配置
│       ├── www.conf                    - www.fe.com 配置
│       └── www2.conf                   - www2.fe.com 配置
└── node                                - Node.js 服务 - 未完成
    ├── index.js
    └── package.json
```

## Kibana 常用字段说明

- `env` - 标签，用来区分项目
- `env_source` - 标签来源，如：`node`、`nginx`
- `env_level` - 日志类型，如：`access`、`error`、`debug`、`info`
- `env_timestamp` - 日志源（Node.js、Nginx）发生时间，而`@timestamp` 是写入 ES 时的时间

## Nginx 日志接入

使用 `log_format` 配置一个 Fluentd 的日志格式，在使用时直接接入 Fluentd syslog 日志，如：

```
access_log syslog:server=fluentd:8989,tag=www Fluentd;
error_log syslog:server=fluentd:8988,tag=www error;
```

字段说明：

- `8989` - Fluentd 暴露的 `nginx.access` 收集端口
- `8988` - Fluentd 暴露的 `nginx.error` 收集端口
- `tag=www` - 使用 `tag` 透传一个日志中的 `env` 字段，用来做产品线/名称的筛选条件
- `fluentd:port` - Fluentd 服务容器名，在 Docker 内直连
- `error_log ... error` - 错误日志等级

## Node.js 日志接入

统一使用 [fluent-logger](https://www.npmjs.com/package/fluent-logger) 写入 Fluentd 日志，扩展一个 [logger.js](./node/logger.js) ，使用如：

```js
const Logger = require('./logger');
const logger = new Logger({
    env: '环境标识',
});

logger.info(string);
logger.debug({
    message: '',
    test: 1,
});
```

## 参考链接

- <https://docs.fluentd.org/v0.12/articles/docker-logging-efk-compose>
- <https://zhuanlan.zhihu.com/p/41451308>
- <https://codefarm.me/2018/06/29/elasticsearch-fluentd-kibana-docker-compose/>
- <https://hub.docker.com/r/fluent/fluentd/>
- <https://yq.aliyun.com/articles/484403>