# base image
FROM node:12.2.0-alpine as build

# working directory
RUN mkdir -p /usr/src/gui
WORKDIR /usr/src/gui

# set path and copy package.json
ENV PATH /usr/src/gui/node_modules/.bin:$PATH
COPY package.json /usr/src/gui/package.json

# install dependencies
RUN npm install --silent
RUN npm install react-scripts -g --silent

# load data into volume
COPY . /usr/src/gui
RUN npm run build

# nginx
FROM nginx:1.13.12-alpine

# get static build
COPY --from=build /usr/src/gui/build /usr/share/nginx/html

# nginx default port expose in docker network
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
