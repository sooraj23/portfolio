# --- Stage 1: Build the App ---
# Use 'slim' instead of 'alpine' for better Raspberry Pi compatibility
FROM node:lts-slim AS builder

WORKDIR /app

# Copy ALL files (including the bad node_modules)
COPY . .

# THE FIX: Delete the incompatible node_modules and package-lock
# This forces the Pi to download fresh, compatible versions
RUN rm -rf node_modules package-lock.json

# Install dependencies freshly
RUN npm install

# Build the project
RUN npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine

# Clean default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output
# IMPORTANT: If your build fails later, change '/app/build' to '/app/dist'
COPY --from=builder /app/build /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
