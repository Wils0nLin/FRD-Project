FROM node:lts
WORKDIR /usr/src/app
COPY . .
COPY package.json .
EXPOSE 3000
CMD yarn install && \
    echo "-----> yarn prisma migrate deploy" &&\
    yarn prisma migrate deploy &&\
    echo "-----> yarn prisma migrate reset --force" &&\
    yarn prisma migrate reset --force &&\
    echo "-----> yarn seed:prod" &&\
    node dist/src/main