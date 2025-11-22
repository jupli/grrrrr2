import { sendSuccess } from '../utils/response.js';
import { getHealth } from '../services/healthService.js';

export const health = (req, res) => {
  const data = getHealth();
  sendSuccess(res, data, 'Service healthy');
};

