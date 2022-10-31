FROM node:16

WORKDIR /code/bookmark_frontend
ADD ./package.json /code/bookmark_frontend/package.json
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]