FROM ghost:6-alpine
ENV NODE_ENV=production

# Copy the production config
COPY config.production.js /var/lib/ghost/config.production.js

# Adapter S3/R2 pour stocker les images (obligatoire sur Railway)
RUN npm install ghost-storage-adapter-s3@latest --production && \
    mkdir -p /var/lib/ghost/content/adapters/storage && \
    cp -r node_modules/ghost-storage-adapter-s3 /var/lib/ghost/content/adapters/storage/s3

EXPOSE 2368
CMD ["node","current/index.js"]