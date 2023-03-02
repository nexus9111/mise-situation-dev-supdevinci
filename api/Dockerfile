FROM node:14
WORKDIR /app/
COPY ./ ./
RUN npm ci
RUN npm i pm2 -g

RUN cp .env.example .env.development
RUN cp .env.example .env.production

CMD ["pm2-runtime", "ecosystem.config.js", "--NODE_ENV=production"]