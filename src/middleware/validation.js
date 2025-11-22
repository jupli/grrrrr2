import { validationResult } from 'express-validator';
import { sendError } from '../utils/response.js';

export const validate = (chains) => {
  return async (req, res, next) => {
    for (const chain of chains) {
      // Run each validator sequentially
      await chain.run(req);
    }
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return sendError(res, { message: 'Validation failed', details: result.array() }, 422);
    }
    return next();
  };
};

