# Use an official Node.js runtime as the base image
FROM node:21

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . ./

# Set the PORT environment variable to 8080
ENV PORT=8080

# Expose port 8080 for the application
EXPOSE 8080

# Define the command to run the application
CMD [ "npm" , "start" ]
