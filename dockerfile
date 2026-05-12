FROM node:20-alpine AS frontend-builder

WORKDIR /app

COPY ./frontend/package*.json /app

RUN npm install

COPY ./frontend /app

RUN npm run build

# Backend build stage

FROM node:20-alpine

WORKDIR /app

COPY ./backend/package*.json /app

RUN npm install 

COPY ./backend /app

COPY --from=frontend-builder /app/dist /app/public

CMD ["node","server.js"]
