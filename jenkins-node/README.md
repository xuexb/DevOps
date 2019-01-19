# 使用 Jenkins 多机器部署 Node.js 应用

此项目只是配置，具体请看：<https://xuexb.com/post/docker-jenkins-node.html>

## 目标

- 负载均衡
- 多机部署

## 目录结构

```
.
├── README.md
├── docker-compose.yml                  - 配置文件
├── nginx                               - Nginx 配置
│   ├── nginx.conf                      - Nginx 配置主文件
│   └── vhost                           - 代理服务
│       ├── gitlab.conf                 - GitLab 代理配置
│       ├── jenkins.conf                - Jenkins 代理配置
│       ├── node1.conf                  - Node.js 站点代理配置
│       ├── node2.conf
│       ├── node3.conf
│       ├── node4.conf
│       ├── node5.conf
│       └── www.conf                    - 首页覆盖均衡主入口配置
├── node                                - 虚拟多台 Node.js 服务
│   ├── Dockerfile                      - 编译出一个支持配置 SSH + 默认安装 Node.js 、PM2 、Yarn 的容器
│   └── env.sh                          - Node.js 虚拟服务入口脚本
├── node-demo                           - 提供一个 PM2 启动 Node.js 项目的示例
│   ├── README.md
│   ├── deploy.sh
│   ├── index.js
│   ├── package.json
│   ├── pm2.config.js
│   └── yarn.lock
└── ssh                                 - 各个环境授权的 SSH key
    ├── id_rsa
    └── id_rsa.pub
```