FROM node:14-alpine AS builder
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json package-lock.json ./
RUN npm install
# Copy app files
COPY . .
# Build the app
RUN npm run build-prod

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
# Copy built assets from builder
COPY --from=builder /app/out /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 3000
# Start nginx
CMD ["nginx", "-g", "daemon off;"]