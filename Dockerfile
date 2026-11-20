# Production image for helios (Coolify). Node 24 is required: Tailwind 4's loader require()s ESM-only deps,
# which Node < 22.12 cannot do (nixpacks' pinned nixpkgs has no nodejs_24, hence this Dockerfile).
FROM node:24-slim
RUN npm install -g pnpm@10
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
# NEXT_PUBLIC_* is inlined at build time: pass it as a build arg when Convex polling is wired up.
ARG NEXT_PUBLIC_CONVEX_URL
ENV NEXT_PUBLIC_CONVEX_URL=$NEXT_PUBLIC_CONVEX_URL
RUN pnpm build
ENV NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0 NEXT_TELEMETRY_DISABLED=1
EXPOSE 3000
CMD ["pnpm", "start"]
