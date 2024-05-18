# https://docs.docker.com/build/guide/intro/

# Use the official Bun image from the Docker Hub || https://hub.docker.com/r/oven/bun
FROM oven/bun:alpine

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy app files
COPY . .

# Install app dependencies
RUN bun install

# Bind the app to port 3000
EXPOSE 3000

# Run the application
CMD ["bun", "start"]

# Build the image: docker build -t book-finder .
# Run the container:
# docker run -p [host port]:[container port] [image name]
# docker run -p 3000:3000 --name book-finder book-finder