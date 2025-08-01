# syntax=docker/dockerfile:1

ARG NODE_VERSION=lts-alpine

FROM node:${NODE_VERSION} AS build

WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY . ./

RUN --mount=type=secret,id=resend-api-key,env=NUXT_RESEND_API_KEY \
  --mount=type=secret,id=resend-from-email,env=NUXT_RESEND_FROM_EMAIL \
  --mount=type=secret,id=resend-to-email,env=NUXT_RESEND_TO_EMAIL \
  pnpm run build

FROM node:${NODE_VERSION}

WORKDIR /app

COPY --from=build /app/.output .output

ENV PORT=3000 \
  NODE_ENV=production \
  HOST=0.0.0.0

EXPOSE 3000

CMD [ "node", "/app/.output/server/index.mjs" ]
