# Set the base image to node:18.19.0-alpine
FROM node:18.19.0-alpine as build

# create app dir
RUN mkdir /app

# Specify where our app will live in the container
WORKDIR /app

# copy package.json and yarn.lock
COPY package.json yarn.lock ./

# install app dependencies
RUN yarn install --network-timeout 900000 && \
    yarn cache clean

# Copy the React App to the container
COPY . .

# We want the production version
RUN yarn build

# Prepare nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Fire up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
