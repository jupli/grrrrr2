import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler.js';
import { validate } from '../middleware/validation.js';
import { body } from 'express-validator';
import { index, show, store, patch, destroy } from '../controllers/userController.js';

const router = Router();

router.get('/', asyncHandler(index));
router.get('/:id', asyncHandler(show));

router.post(
  '/',
  validate([
    body('name').isString().isLength({ min: 2 }).trim(),
    body('email').isEmail().normalizeEmail(),
  ]),
  asyncHandler(store)
);

router.patch(
  '/:id',
  validate([
    body('name').optional().isString().isLength({ min: 2 }).trim(),
    body('email').optional().isEmail().normalizeEmail(),
  ]),
  asyncHandler(patch)
);

router.delete('/:id', asyncHandler(destroy));

export default router;

