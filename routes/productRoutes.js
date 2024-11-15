const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const productController = require('../controllers/productController');

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
  productController.createProduct
);

// Route to get a product by ID
router.get('/products/:id', productController.getProductById);

// Route to update a product by ID with validation
router.put(
  '/products/:id',
  validateProduct,
  handleValidationErrors,
  productController.updateProduct
);

// Route to delete a product by ID
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
