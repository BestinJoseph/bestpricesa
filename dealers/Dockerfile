FROM node:18-alpine as build

WORKDIR /dealers
ENV PATH /host/node_modules/.bin:$PATH
COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm","start"]
