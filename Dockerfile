FROM node:18-slim

WORKDIR /opt/app

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV PORT=80

ENTRYPOINT [ "sh", "entry-point.sh" ]
