FROM fluent/fluentd:stable-onbuild
WORKDIR /home/fluent
ENV PATH /home/fluent/.gem/ruby/2.4.0/bin:$PATH
ENV APK_ADD=".build-deps sudo build-base ruby-dev"
ENV APK_DEL=".build-deps sudo build-base ruby-dev"

ARG GEM_VERSION="-v 2.4.0"
ARG GEM_NAME="fluent-plugin-elasticsearch fluent-plugin-rewrite-tag-filter "
RUN apk add --update --no-cache --virtual $APK_ADD && \
      sudo gem install "${GEM_NAME}" ${GEM_VERSION} && \
      sudo gem sources --clear-all && \
      apk del ${APK_DEL} && rm -rf /var/cache/apk/* \
        /home/fluent/.gem/ruby/2.3.0/cache/*.gem

EXPOSE 24224

ENTRYPOINT exec fluentd -c /fluentd/etc/fluent.conf