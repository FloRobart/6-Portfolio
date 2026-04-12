# Étape 1 : Build stage (Astro)
FROM node:lts-slim AS builder
WORKDIR /app

# Install deps (cache optimisé)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source
COPY . .

# Build Astro (génère /dist)
RUN npm run build

# Étape 2 : Runtime stage (Nginx public)
FROM nginx:stable-alpine

# On utilise root pour configurer nginx et les permissions
USER root

# Supprime config par défaut
RUN rm -rf /etc/nginx/conf.d/*

# Copy config nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copy build Astro
COPY --from=builder /app/dist /usr/share/nginx/html

# Ajout d'un utilisateur non-root avec UID/GID fixes
RUN addgroup -g 1800 -S portfoliogroup && adduser -u 1800 -S portfoliouser -G portfoliogroup \
&& mkdir -p /run/nginx /var/cache/nginx /var/run /var/log/nginx \
&& chown -R portfoliouser:portfoliogroup /var/cache/nginx /var/run /var/log/nginx /run/nginx \
&& chmod 0755 /run/nginx

# Permissions propres pour non-root
RUN chown -R portfoliouser:portfoliogroup /usr/share/nginx/html

# Revenir en non-root (important)
USER portfoliouser
