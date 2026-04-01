FROM node:lts-alpine

WORKDIR /app
COPY . .
EXPOSE 9999
RUN npm install
CMD ['npm', 'run', 'start']