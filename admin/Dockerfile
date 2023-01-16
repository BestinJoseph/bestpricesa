FROM node:18-alpine

WORKDIR /usr/src/admin

COPY package*.json ./

RUN npm i

COPY . ./

EXPOSE 3002

CMD ["npm","start"]
