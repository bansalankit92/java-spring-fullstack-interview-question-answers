# Prep Cards: static site served by nginx.
# Build context MUST be the repo root (the build reads ../docs and ../README.md):
#   docker build -f app/Dockerfile -t prep-cards .
#   docker run -p 8080:80 prep-cards
# Dokploy: Build type "Dockerfile", Docker File "app/Dockerfile", Docker Context Path "." (repo root).

FROM node:22-alpine AS build
WORKDIR /repo
COPY README.md ./
COPY docs ./docs
COPY app ./app
RUN node app/build.mjs

FROM nginx:1.27-alpine
COPY app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /repo/app/dist /usr/share/nginx/html
EXPOSE 80 3000
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
