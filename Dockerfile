FROM node:20
WORKDIR /client
COPY package.json ./
RUN npm install
#copy my code
COPY . .
RUN npm run build
#nginx image to serve our application
FROM nginx:alpine
# COPY --from=build /client/build /usr/share/nginx/html
EXPOSE 80

#cmd to run our engine
# CMD ["nginx","-g","deamon off;"]
CMD ["npm","start"]