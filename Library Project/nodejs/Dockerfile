FROM node:alpine
WORKDIR /usr/src/app/library/nodejs
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "run", "serve"] 