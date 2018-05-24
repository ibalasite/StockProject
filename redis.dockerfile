FROM redis
RUN apt-get update
VOLUME ["/share"]
EXPOSE 6379
COPY start.sh /tmp/
RUN  mv /tmp/start.sh /usr/bin 
CMD ["start.sh"]
