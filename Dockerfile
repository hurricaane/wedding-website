ARG NODE_VERSION=lts-alpine

FROM node:${NODE_VERSION} AS build

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY . ./

RUN pnpm run build

FROM node:${NODE_VERSION}

WORKDIR /app

COPY --from=build /app/.output .output

ENV PORT=3000 \
  NODE_ENV=production \
  HOST=0.0.0.0

EXPOSE 3000

CMD [ "node", "/app/.output/server/index.mjs" ]
