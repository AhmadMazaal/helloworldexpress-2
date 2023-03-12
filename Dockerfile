FROM node:18.12.1-alpine
WORKDIR /usr/src/app
COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]