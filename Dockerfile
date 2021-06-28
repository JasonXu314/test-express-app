FROM node:16

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["node", "src/index.js"]