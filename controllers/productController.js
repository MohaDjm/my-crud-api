import * as ProductService from '../services/productService.js';

// Controller to handle product creation
export const createProduct = async (req, res) => {
  try {
    const product = await ProductService.createProduct(req.body);
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller to fetch a product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller to update an existing product
export const updateProduct = async (req, res) => {
  try {
    await ProductService.updateProduct(req.params.id, req.body);
    res.status(200).json({ message: 'Product updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller to delete a product by ID
export const deleteProduct = async (req, res) => {
  try {
    await ProductService.deleteProduct(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
