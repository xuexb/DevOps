#!/bin/bash

APP_NAME='app'
APP_DIR='/root/app'

# 加载变量
if [ -f $HOME/.env ]; then
    . $HOME/.env
fi

export NVM_DIR="$HOME/.nvm" \
    && export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node \
    && \. "$NVM_DIR/nvm.sh" \
    && \. "$NVM_DIR/bash_completion" \
    && export ENV_LABEL=$ENV_LABEL # 透传变量

echo "Deploy in ${ENV_LABEL}"

node -v
npm -v
pm2 --version
yarn -v

# 服务器中安装依赖
cd $APP_DIR
yarn

pm2 startOrReload app.config.js