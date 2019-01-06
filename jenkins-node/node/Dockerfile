FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y openssh-server net-tools vim iputils-ping
RUN mkdir -p /root/.ssh/
RUN echo root:123456 | chpasswd
RUN sed -i 's/#PermitRootLogin without-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN /etc/init.d/ssh start

EXPOSE 22