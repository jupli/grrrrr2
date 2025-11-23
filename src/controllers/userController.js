import { sendSuccess, sendError } from '../utils/response.js';
import { listUsers, getUserById, createUser, updateUser, deleteUser } from '../services/userService.js';

export const index = (req, res) => {
  const data = listUsers();
  sendSuccess(res, data);
};

export const show = (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) return sendError(res, 'Not Found', 404);
  sendSuccess(res, user);
};

export const store = (req, res) => {
  const user = createUser(req.body);
  sendSuccess(res, user, 'Created', 201);
};

export const patch = (req, res) => {
  const user = updateUser(req.params.id, req.body);
  if (!user) return sendError(res, 'Not Found', 404);
  sendSuccess(res, user);
};

export const destroy = (req, res) => {
  const ok = deleteUser(req.params.id);
  if (!ok) return sendError(res, 'Not Found', 404);
  sendSuccess(res, { id: req.params.id }, 'Deleted');
};

