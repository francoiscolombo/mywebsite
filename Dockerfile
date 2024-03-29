# STEP 1 build static website
FROM node:latest as builder

# Create app directory
WORKDIR /app

# Copy project files into the docker image
COPY .  /app

RUN cd /app && \
    npm install && \
    npm install -g @angular/cli@14.0.1 && \
    ng build

# STEP 2 build a small nginx image with static website
FROM nginx:stable-alpine

LABEL maintainer  "Francois Colombo <francoiscolombo@protonmail.com>"
LABEL application "mywebsite"

# Additional packages
RUN apk update && \
    apk add --no-cache tzdata && \
    rm -rf /var/cache/apk/*

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' copy website to default nginx public folder
COPY --from=builder --chown=nginx:nginx /app/dist/francoiscolombo/ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
