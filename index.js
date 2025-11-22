// This file acts as a simple Node.js Express server to serve the *built* React application's static assets.
// It is generated to fulfill the 'start' script and deployment requirements of the user's request.

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 8080;

// Derive __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'dist' directory (where React build output typically goes)
// For local development, you might run 'npm run dev' or 'vite' separately.
// For deployment, 'npm run build' generates the 'dist' folder, which this server then serves.
const buildPath = path.join(__dirname, 'dist');
app.use(express.static(buildPath));

// For any route not explicitly handled (e.g., /about, /contact), serve index.html.
// This allows client-side React Router to handle the actual routing within the SPA.
app.get('/*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Serving static files from: ${buildPath}`);
});
