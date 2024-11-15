import express from 'express';
import productRoutes from './routes/productRoutes.js';

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Main API route for product-related endpoints
app.use('/api', productRoutes);

// Start the server on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
