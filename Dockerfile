FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=prod

COPY ["package.json", "./"]

RUN npm install --production=true

COPY . .

CMD [ "node", "./src/app.js" ]

