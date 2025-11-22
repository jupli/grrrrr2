export const sendSuccess = (res, data = null, message = 'OK', status = 200) => {
  res.status(status).json({ success: true, message, data });
};

export const sendError = (res, error, status = 500) => {
  const message = typeof error === 'string' ? error : error?.message || 'Internal Server Error';
  res.status(status).json({ success: false, message });
};

