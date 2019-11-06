# 基于 Docker 部署 GitLab + Jenkins + nginx 自动化环境

此项目只是一个配置，具体过程见：<https://xuexb.com/post/docker-gitlab-jenkins-nginx.html> 。

## 服务

- Jenkins - 部署
- Nginx - Web Server
- GitLab - Git 管理
- dnsmasq - 自定义 DNS ，用于解析泛域名（ `fe.com` ）

## 域名规则

使用 <https://github.com/jpillora/docker-dnsmasq> 作为本地 DNS Server ，需要本地添加 DNS 地址：`127.0.0.1` 。

- `www.fe.com` - 测试首页
- `jenkins.fe.com` - Jenkins
- `gitlab.fe.com` - GitLab
- `项目名--分支名.branch.fe.com` - 分支预览，如：`demo--master.branch.fe.com`
- `项目名--PRID.pr.fe.com` - PR 预览，如：`demo--1.pr.fe.com`

### 注意

由于是 Docker Compose 方式运行，服务内部访问时需要使用别名，如：

- Jenkins - `http://jenkins:8080`
- GitLab - `http://gitlab` 、`ssh git@gitlab:user/repo`

## 目录

```
.
├── dnsmasq
│   └── dnsmasq.conf                            - DNS 配置
├── docker-compose.yml                          - Docker 配置
├── gitlab                                      - GitLab 目录，忽略提交
├── jenkins                                     - Jenkins 目录，忽略提交
├── html                                        - 静态文件，项目编译后会存放到这，Nginx 做代理
│   ├── jenkins                                 - Jenkins 编译产出文件目录
│   │   └── demo
│   │       └── branch
│   │           └── master
│   │               └── index.html
│   ├── nginx                                   - Nginx 使用通用文件
│   │   ├── 403.html
│   │   └── 404.html
│   └── www                                     - www.fe.com 使用页面
│       └── index.html
└── nginx                                       - Nginx 配置
    ├── nginx.conf
    └── vhost
        ├── deploy.conf
        ├── gitlab.conf
        ├── jenkins.conf
        └── www.conf
```

## 参考链接

- <https://github.com/jpillora/docker-dnsmasq>
- <https://xuexb.com/post/docker-gitlab-jenkins-nginx.html>
- <https://blog.csdn.net/dounine/article/details/78778258>
