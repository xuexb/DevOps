# Node.js 接入 EFK 日志

## 目录结构

```
node
├── Dockerfile              - Docker 配置
├── README.md
├── index.js                - Web Server Koa 入口
├── logger.js               - 日志统一入口
├── package.json
├── router.js               - 路由配置
└── yarn.lock
```

## 访问路径

- `/` - 成功主页
- `/error/404` - 模拟产生一个服务端404错误日志
- `/error/500` - 模拟产生一个服务端500错误日志
- `/order/:id` - 模拟产生一个订单信息日志、订单处理失败日志