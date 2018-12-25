# DevOps
我的 DevOps 学习历程，由于是初探未知宇宙，可能随时更新文档。恩，没事了就搞一搞。

## Docker-compose Demo

- [x] [Docker 部署 Jenkins + GitLab + Nginx](./jenkins-gitlab-nginx)
- [ ] Docker 部署 ELK + Nginx + Node.js

## 服务器

机房 | 配置 | 标签 | 特点
--- | --- | --- | ---
阿里云北京 | 1U 1G | bj01 | 提供博客国内版
阿里云新加坡 | 1U 1G | sg01 | 提供博客国外版
阿里云新加坡 | 4U 8G | sg02 | 编译机、数据库

服务器具备以下：

- [x] 标签名称 Hosts 映射
- [x] 相互无密码 `ssh` 登录
- [ ] 禁止 `root` 用户登录
- [ ] 默认帐户 `sudo` 需要密码，可使用 Jenkins 配置凭证登录 `admin` 帐号进行免密码 `sudo` 命令

## 服务

### bg01
- Docker
    - [ ] Blog
        - [ ] Nginx
        - [ ] Node.js

### sg01
- Docker
    - [ ] Blog
        - [ ] Nginx
        - [ ] Node.js

### sg02

- Docker
    - [ ] Jenkins
    - [ ] Nginx
    - [ ] ELK
    - [ ] Filebeat
    - [ ] Shadowsocks
    - [ ] MTProxy

## Jenkins Jobs

- Blog
    - Deploy-blog - 部署博客到 bj01 和 sg01 ，通过 DNS 区分国内、国外，<https://xuexb.com/>
    - Deploy-blog-nginx-conf - 部署博客相关 Nginx 配置
    - Deploy-auto-ssl - 自动更新博客 SSL 证书，并同步到 bj01 和 sg01 ，周期三个月
    - Deploy-nginx-cache - 部署 bj01 中的 Nginx Cache 管理站点，且站点待优化 <https://cache.xuexb.com/>
    - Deploy-demo - 部署 <https://github.xuexb.com/> 站点到 bj01
    - Deploy-oauth-demo - 部署 <https://xuexb.com/web-oauth-app/> oAuth2.0 第三方登录示例站点到 bj01
    - Deploy-github-bot - 部署 <https://github.com/xuexb/github-bot/> 站点到 bj01
    - Deploy-sso-demo - 部署 SSO 单点登录示例站点到 bj01
    - Auto-back-data - 定期把数据库的数据备份到本地，其他配置都在 GitHub 不用备份，资态图片在 CDN 中不用备份
- Xiaoshuo
- Jiandansousuo

## Jenkins Env

变量名 | 值 | 备注
--- | --- | ---
JENKINS | `true` | 表示当前使用 Jenkins 编译
CI | `true` | 表示当前是 CI 流程
ENV_LABEL | bj01、sg01、sg02 | 表示当前编译环境的标签

## ELK 日志

接入日志：

- Node.js 日志
- Nginx 访问日志、错误日志

通用字段：

- app - 服务名称
- env_label - 当前环境标签名
- source - 日志来源，`node_info`、`node_error`、`nginx_access`、`nginx_error`
- todo

## 参考链接

> 排名不分行后

- <https://www.cnblogs.com/yjmyzz/p/filebeat-turorial-and-kibana-login-setting-with-nginx.html>
- <https://github.com/chenzhijun/elk/blob/master/docker-compose.yml>
- <https://elk-docker.readthedocs.io/>
- <https://blog.csdn.net/qq_33406938/article/details/80307679>
- <http://f2e.souche.com/blog/ri-zhi-gui-fan-hua-yu-fen-xi-jian-kong/>
