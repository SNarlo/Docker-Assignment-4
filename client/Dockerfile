FROM node:alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install

COPY . .

RUN chmod 777 node_modules

EXPOSE 3000

CMD ["npm", "start"]