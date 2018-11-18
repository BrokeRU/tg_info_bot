FROM node:alpine
WORKDIR /app
COPY . /app
RUN npm install
CMD node index.js
ENV TOKEN <write_your_token_here>
