FROM node:18-alpine as build

WORKDIR /host
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./

RUN npm Ci --silent

COPY . ./
RUN npm run build

CMD ["npm","start"]

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
