FROM node:12.2.0

WORKDIR /users/project

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]
