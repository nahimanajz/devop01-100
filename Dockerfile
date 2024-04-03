#specify base imae
FROM node:14-alpine

#specify your application working directory it will be created if it is not already exist
WORKDIR /usr/app

# pLace stuff from local computer to container
COPY ./package.json ./

#install dependencies
RUN npm install

#After installing dependencies copy everything else to our container
Copy ./ ./

#default command
CMD ["npm", "start"]