FROM node:18.7.0
WORKDIR /app
COPY package*.json ./

RUN npm install -g nodemon
RUN npm install -g express
RUN npm install


COPY . . 
EXPOSE 8001
CMD [ "nodemon", "express.js"]