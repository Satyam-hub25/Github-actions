FROM node:24.21.0-alpine

    WORKDIR /app

COPY package*.json ./

 RUN npm ci

COPY . .

EXPOSE 5000

CMD [ "npm" , "start"]

