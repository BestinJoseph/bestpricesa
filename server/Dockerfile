FROM node:18-alpine

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm i -g nodemon

RUN npm i

COPY . ./

EXPOSE 8000

CMD ["npm","run", "dev"]
