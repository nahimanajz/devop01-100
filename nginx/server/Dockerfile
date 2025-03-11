# Use Node 20.16 Alpine as base image
FROM node:20.16-alpine3.19 AS base

# Change the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy only source files (ignoring node_modules via .dockerignore)
COPY . .

# Expose port
EXPOSE 7777

# Start the application
CMD ["npm", "run", "start"]
