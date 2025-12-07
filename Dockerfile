# --- Stage 1: Build the App ---
# Use a lightweight Node image
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the project (output usually goes to /build or /dist)
RUN npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output from Stage 1
# NOTE: Check if your repo builds to 'build' or 'dist'. 
# React usually uses 'build', Vite uses 'dist'. 
# If your build folder is 'dist', change '/app/build' to '/app/dist' below.
COPY --from=builder /app/build /usr/share/nginx/html

# Copy our custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
