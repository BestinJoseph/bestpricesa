FROM node:18-alpine as build

WORKDIR /host
ENV PATH /host/node_modules/.bin:$PATH
COPY package*.json .

RUN npm i

COPY . .
RUN npm run build

# CMD ["npm","start"]

FROM nginx:stable-alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /host/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
