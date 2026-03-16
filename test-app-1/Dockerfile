FROM node 

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=123

RUN mkdir -p test-app 

COPY . /test-app

CMD ["node", "/test-app/index.js"]
