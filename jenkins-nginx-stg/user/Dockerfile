FROM centos

WORKDIR /root

RUN yum update -y
RUN yum install -y net-tools git vim zsh wget

RUN git config --global user.email "fe.xiaowu@gmail.com"
RUN git config --global user.name "xiaowu"
RUN git config --global push.default simple

RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true