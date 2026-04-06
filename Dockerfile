FROM node:24-alpine AS deps

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev


FROM node:24-alpine

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --chown=node:node . .

USER node

EXPOSE 8000

CMD ["npm", "start"]
