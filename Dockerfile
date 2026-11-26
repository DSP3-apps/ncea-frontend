FROM node:lts-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies using a BuildKit secret instead of storing the token in an image layer
RUN --mount=type=secret,id=github_packages_token,required=true \
    set -eu; \
    token="$(cat /run/secrets/github_packages_token)"; \
    test -n "$token" || { echo "GitHub Packages token is required" >&2; exit 1; }; \
    export NPM_CONFIG_USERCONFIG=/tmp/npmrc; \
    trap 'rm -f "$NPM_CONFIG_USERCONFIG"' EXIT; \
    printf '@agrimetrics:registry=https://npm.pkg.github.com/\n//npm.pkg.github.com/:_authToken=%s\n' "$token" > "$NPM_CONFIG_USERCONFIG"; \
    npm ci

# Copy the entire source code into the container
COPY . .

# Build the application
RUN npm run build


FROM node:lts-alpine

# Change the working directory on the Docker image to /app
WORKDIR /app

# Copy only the 'build' folder from the builder stage
COPY --from=builder /app/build ./build

# Copy the 'node_modules' folder from the builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy the 'public' folder from the builder stage
COPY --from=builder /app/public ./public

# Copy the package.json file,from which app version is getting
COPY --from=builder /app/package.json ./

# Create the 'log_files' folder
RUN mkdir /app/log_files

# Expose application port
EXPOSE 3000

# Start the application
CMD ["node", "build/index.js"]
