FROM node:16.15.0-alpine AS base

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@5.0.1 -g --silent

FROM base AS builder
COPY . ./
# Update browserslist database before building
RUN npx browserslist@latest --update-db
RUN npm run build

# now have initial build for react application

# create config to tell nginx where to look for files

FROM nginx:stable-alpine AS production
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]