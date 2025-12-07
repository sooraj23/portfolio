# --- Stage 1: Build the App ---
FROM node:lts-slim AS builder

WORKDIR /app

# 1. Install system build tools (Missing in 'slim' images, needed for ARM builds)
#    This fixes "node-gyp" and "sass" errors often causing Exit Code 2
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# 2. Clean slate: Delete local dependencies
RUN rm -rf node_modules package-lock.json

COPY package*.json ./

# 3. Install dependencies
#    --legacy-peer-deps helps if some packages conflict
RUN npm install --legacy-peer-deps

COPY . .

# 4. Build with SAFE memory options
#    Set to 2048 (2GB). If your Pi has 1GB RAM, change this to 1024.
ENV NODE_OPTIONS="--max-old-space-size=2048"

# 5. Run build with VERBOSE logging so we can see the real error if it fails
RUN npm run build --verbose

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# IMPORTANT: Check your repo! 
# If you use Vite/Vue, change '/app/build' to '/app/dist'
COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
