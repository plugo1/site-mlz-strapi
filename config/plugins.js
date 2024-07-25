// file: ./config/plugins.js
module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'strapi-provider-upload-minio-ce',
            providerOptions: {
                accessKey: env('MINIO_ACCESS_KEY', 'Q3AM3UQ867SPQQA43P2F'),
                secretKey: env('MINIO_SECRET_KEY', 'zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG'),
                bucket: env('MINIO_BUCKET', 'test-2021-09-22'),
                endPoint: env('MINIO_ENDPOINT', 'play.min.io'),
                port: env('MINIO_PORT', 9000),
                useSSL: env('MINIO_USE_SSL', true),
                folder: env('MINIO_FOLDER', 'cms'),
                private: env('MINIO_PRIVATE', false), // private bucket
                expiry: env('MINIO_EXPIRY', 7 * 24 * 60 * 60), // default 7 days, unit: seconds, only work for private bucket
            },
        },
    },
});
