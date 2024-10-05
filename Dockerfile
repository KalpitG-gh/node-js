# Stage 1: Build environment
FROM node:16 as build

WORKDIR /app

# Copy package.json and install dependencies (including dev dependencies if needed)
COPY package.json ./
RUN npm install

# Copy the application source code
COPY . .

# Stage 2: Production environment
FROM node:16-alpine

WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /app .

# Expose the port and start the application
EXPOSE 3000
CMD ["npm", "start"]
