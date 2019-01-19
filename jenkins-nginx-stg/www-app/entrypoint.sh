#!/bin/bash

# 启动 Nginx
/usr/sbin/nginx

# 运行 dockerxman/docker-ubuntu-ssh:latest 的入口文件
if [ -f /run.sh ]; then
    /run.sh
fi