FROM node:18-alpine

RUN npm install pm2 -g

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["pm2-runtime", "start", "ecosystem.config.js"]