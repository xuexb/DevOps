FROM dockerxman/docker-ubuntu-ssh:latest
LABEL MAINTAINER xuexb <fe.xiaowu@gmail.com>

RUN mkdir -p /root/app
WORKDIR /root/app/

COPY env.sh /root/
RUN chmod +x /root/env.sh

RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
RUN export NVM_DIR="$HOME/.nvm" \
    && export NVM_NODEJS_ORG_MIRROR=http://npm.taobao.org/mirrors/node \
    && \. "$NVM_DIR/nvm.sh" \
    && \. "$NVM_DIR/bash_completion" \
    && nvm install node --lts \
    && nvm alias default stable \
    && npm install -g yarn pm2 --registry=https://registry.npm.taobao.org

EXPOSE 3000
EXPOSE 22

CMD [ "/root/env.sh" ]