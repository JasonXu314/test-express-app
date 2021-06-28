FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["node", "src/index.js"]