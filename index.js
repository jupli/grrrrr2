// This file acts as a simple Node.js Express server to serve the *built* React application's static assets.
// It is generated to fulfill the 'start' script and deployment requirements of the user's request.

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import apiRouter from './src/routes/index.js';
import { env } from './src/config/env.js';
import { notFoundHandler, errorHandler } from './src/middleware/errorHandler.js';

const app = express();
const PORT = env.port;

// Derive __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Security & common middleware
app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(morgan(env.nodeEnv === 'production' ? 'combined' : 'dev'));
app.use(cors({ origin: env.corsOrigin }));

// API routes
app.use('/api', apiRouter);
app.use('/api', notFoundHandler);
app.use('/api', errorHandler);

// Static assets
const buildPath = path.join(__dirname, 'dist');
app.use(express.static(buildPath));

// For any route not explicitly handled (e.g., /about, /contact), serve index.html.
// This allows client-side React Router to handle the actual routing within the SPA.
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Serving static files from: ${buildPath}`);
});
