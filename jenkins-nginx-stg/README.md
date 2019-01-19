# 使用 Jenkins + Nginx 实现预发布

此项目只是配置，具体请看：<https://xuexb.com/post/jenkins-nginx-pre-release.html>

## 目标

- 自动发布预发布环境
- 手机继续全量发布
- 接入层负载均衡
- 可直联应用层

## 目录结构

```
.
├── docker-compose.yml
├── nginx                                   - Nginx 配置文件
│   ├── nginx.conf                          - Nginx 入口文件
│   ├── proxy                               - 接入层配置文件
│   │   ├── gogs.conf                       - Gogs 反向代理配置文件
│   │   ├── jenkins.conf                    - Jenkins 反向代理配置文件
│   │   └── www.conf                        - 接入层 www.fe.com 配置文件
│   ├── www1                                - prd_www1 配置文件
│   │   └── www.fe.com.conf
│   └── www2                                - prd_www2 配置文件
│       └── www.fe.com.conf
├── ssh                                     - 授权使用的文件，主要用于：免密码登录、克隆项目
│   ├── id_rsa
│   ├── id_rsa.pub
├── user                                    - 模拟用户环境容器，主要在 Centos 系统 基础上添加了一些常用的命令
│   └── Dockerfile
└── www-app                                 - 构建生产环境，主要免密码登录（部署使用）、Nginx 应用
    ├── Dockerfile
    └── entrypoint.sh
```