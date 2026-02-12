# Use the official Bun image
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the application
RUN bun run build

# Expose the port the app runs on (default for vite preview is 5173)
EXPOSE 5173

# Command to run the application
CMD ["bun", "run", "preview", "--port", "5173", "--host", "0.0.0.0"]