#!/bin/bash

# Generate a secret key
SECRET_KEY=$(openssl rand -base64 32)

# Check if .env file exists, create it if not
if [ ! -f .env ]; then
  touch .env
fi

# Add or update the JWT_SECRET entry in .env
if grep -q '^JWT_SECRET_KEY=' .env; then
  sed -i "s/^JWT_SECRET_KEY=.*/JWT_SECRET_KEY=$SECRET_KEY/" .env
else
  echo "JWT_SECRET_KEY=$SECRET_KEY" >> .env
fi

echo "Generated and added JWT_SECRET to .env"
