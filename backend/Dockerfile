FROM alpine:3.20

ENV NODE_VERSION 22.13.1

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json /usr/src/app

RUN apk add --no-cache nodejs npm

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]