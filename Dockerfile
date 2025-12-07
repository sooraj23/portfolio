# --- Stage 1: Build the App ---
FROM node:lts-slim AS builder

WORKDIR /app

# 1. Clean slate: Delete old dependencies
RUN rm -rf node_modules package-lock.json

COPY package*.json ./

# 2. Install dependencies
RUN npm install

COPY . .

# 3. THE FIXES:
# - Increase memory limit for the Pi
# - Disable "warnings as errors" (CI=false)
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN CI=false npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# Note: If this fails later saying "directory not found", change 'build' to 'dist'
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
