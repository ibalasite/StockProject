FROM redis
RUN apt-get update
VOLUME ["/share"]
EXPOSE 6379
ENTRYPOINT hostname -i >> /share/hosts&redis-server&/bin/bash
