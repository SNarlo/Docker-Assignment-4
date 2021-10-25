FROM node:10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install -g

COPY . .

EXPOSE 3000

CMD ["npm", "start"]