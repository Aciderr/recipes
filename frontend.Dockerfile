FROM node:alpine as builder

WORKDIR '/app'

COPY ./dist/apps/web .

#RUN npm install --force

#RUN $(npm bin)/ng build

FROM nginx

EXPOSE 4200

COPY ./frontend.conf /etc/nginx/conf.d/frontend.conf

COPY --from=builder ./app /usr/share/nginx/html
