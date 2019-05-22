FROM node:12.2.0

WORKDIR /users/project

COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["/bin/bash"]
