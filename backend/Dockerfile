from mysql:latest

ENV MYSQL_ROOT_PASSWORD=topSecret
ENV MYSQL_ROOT_HOST=%
ENV MYSQL_DATABASE=boat-rental

COPY setup.sql /docker-entrypoint-initdb.d/