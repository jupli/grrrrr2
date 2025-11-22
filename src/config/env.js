export const env = {
  port: Number(process.env.PORT) || 8080,
  nodeEnv: process.env.NODE_ENV || 'production',
  corsOrigin: process.env.CORS_ORIGIN || '*',
};

