
# Install development only when needed
FROM node:18-alpine AS development
RUN apk add --no-cache libc6-compat
WORKDIR /eina
COPY package*.json ./
COPY next.config.ts ./
COPY tailwind.config.ts ./
COPY postcss.config.mjs ./

RUN npm install --legacy-peer-deps
CMD [ "npm", "run", "dev"]


# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /eina
COPY --from=development /eina/node_modules ./node_modules
COPY --from=development /eina/package*.json ./
COPY --from=development /eina/next.config.ts ./
COPY --from=development /eina/tailwind.config.ts ./
COPY --from=development /eina/postcss.config.mjs ./

COPY public .
COPY src .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build


# Production image, copy all the files and run next
FROM node:18-alpine AS prod
WORKDIR /eina

ENV NODE_ENV production

ENV NEXT_TELEMETRY_DISABLED 1

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /eina/next.config.ts ./
COPY --from=builder /eina/.next ./.next
COPY --from=builder /eina/node_modules ./node_modules
COPY --from=builder /eina/package.json ./package.json

COPY docker-entrypoint.sh .


RUN apk add --no-cache --upgrade bash
RUN ["chmod", "+x", "docker-entrypoint.sh"]

ENTRYPOINT ["./docker-entrypoint.sh"]


EXPOSE 3000

ENV PORT 3000


CMD ["node_modules/.bin/next", "start"]
