FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm && pnpm install

COPY . .

RUN pnpm prisma generate

RUN pnpm build

EXPOSE 3000

CMD ["node", "dist/src/main"]
