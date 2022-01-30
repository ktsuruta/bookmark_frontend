FROM node:17

WORKDIR /code
ADD . /code/bookmark_frontend
WORKDIR /code/bookmark_frontend
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]