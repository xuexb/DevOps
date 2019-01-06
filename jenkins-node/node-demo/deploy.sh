#!/bin/bash

APP_NAME='app'

export NVM_DIR="$HOME/.nvm" \
    && export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node \
    && \. "$NVM_DIR/nvm.sh" \
    && \. "$NVM_DIR/bash_completion" \

echo "Deploy in ${ENV_LABEL}"

node -v
npm -v
pm2 --version
yarn -v

# 服务器中安装依赖
yarn

pm2 show $APP_NAME > /dev/null;
if [ $? != 0 ]; then
    pm2 start index.js --name $APP_NAME
else
    pm2 reload $APP_NAME
fi