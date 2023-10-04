FROM node
WORKDIR /client
ENV PATH="/.node_modules/.bin:$PATH"
COPY . . 
RUN npm install
CMD ["npm", "run", "dev"]