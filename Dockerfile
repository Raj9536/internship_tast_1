# Use node image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package files and install
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose port and run the app
EXPOSE 3000
CMD ["npm", "start"]
