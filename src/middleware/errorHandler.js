import { sendError } from '../utils/response.js';

export const notFoundHandler = (req, res, next) => {
  sendError(res, 'Not Found', 404);
};

export const errorHandler = (err, req, res, next) => {
  if (res.headersSent) return next(err);
  const status = err.statusCode || err.status || 500;
  sendError(res, err, status);
};

