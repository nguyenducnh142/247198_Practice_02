FROM node:22-alpine3.18

# Create app directory
WORKDIR /src

# Install app dependencies
COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 8080

CMD [ "node", "server.js"]