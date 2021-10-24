FROM node:17

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./package*.json ./

COPY . .

EXPOSE 5000

CMD ["npm", "start"]