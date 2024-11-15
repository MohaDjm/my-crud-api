import express from 'express';
import { check, validationResult } from 'express-validator';
import {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';

const router = express.Router();

// Middleware to validate incoming product data
const validateProduct = [
  check('name').notEmpty().withMessage('Name is required'),
  check('description').notEmpty().withMessage('Description is required'),
  check('price').isNumeric().withMessage('Price must be a number'),
  check('category').notEmpty().withMessage('Category is required'),
];

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Route to create a new product with validation
router.post(
  '/products',
  validateProduct,
  handleValidationErrors,
  createProduct
);

// Route to get a product by ID
router.get('/products/:id', getProductById);

// Route to update a product by ID with validation
router.put(
  '/products/:id',
  validateProduct,
  handleValidationErrors,
  updateProduct
);

// Route to delete a product by ID
router.delete('/products/:id', deleteProduct);

export default router;
