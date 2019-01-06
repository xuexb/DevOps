#!/bin/bash

# 写入一个标签变量，因为在 docker-compose.yml 里配置的使用 ssh 登录获取不到
echo "export ENV_LABEL=$ENV_LABEL" >> /root/.bashrc

# 运行 dockerxman/docker-ubuntu-ssh:latest 的入口文件
if [ -f /run.sh ]; then
    /run.sh
fi