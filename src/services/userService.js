import { users } from '../models/userModel.js';

export const listUsers = () => users;

export const getUserById = (id) => users.find((u) => u.id === id);

export const createUser = ({ name, email }) => {
  const id = String(Date.now());
  const user = { id, name, email };
  users.push(user);
  return user;
};

export const updateUser = (id, { name, email }) => {
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return null;
  const current = users[idx];
  const updated = { ...current, ...(name !== undefined ? { name } : {}), ...(email !== undefined ? { email } : {}) };
  users[idx] = updated;
  return updated;
};

export const deleteUser = (id) => {
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return false;
  users.splice(idx, 1);
  return true;
};

