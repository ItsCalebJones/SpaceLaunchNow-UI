FROM node:16.15.0-alpine as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@5.0.1 -g --silent

COPY . ./

RUN npm run build

FROM nginx:stable-alpine as production
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]