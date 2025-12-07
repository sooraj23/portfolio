# --- Stage 1: Build the App ---
FROM node:lts-slim AS builder

WORKDIR /app

# 1. Install system tools
RUN apt-get update && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*

# 2. Clean slate
RUN rm -rf node_modules package-lock.json

COPY package*.json ./

# 3. Install dependencies
RUN npm install --legacy-peer-deps

COPY . .

# 4. Build options
ENV NODE_OPTIONS="--max-old-space-size=4096"
ENV CI=false

# 5. Build the app
RUN npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine

# Clean default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# 6. THE FIX: Changed 'build' to 'dist'
COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
