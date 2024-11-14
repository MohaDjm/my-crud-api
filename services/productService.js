const client = require('../config/cassandra');
const cassandra = require('cassandra-driver');

exports.createProduct = async (productData) => {
  const query =
    'INSERT INTO products (product_id, name, description, price, category) VALUES (?, ?, ?, ?, ?)';
  const params = [
    cassandra.types.Uuid.random(),
    productData.name,
    productData.description,
    productData.price,
    productData.category,
  ];
  await client.execute(query, params, { prepare: true });
};

exports.getProductById = async (id) => {
  const query = 'SELECT * FROM products WHERE product_id = ?';
  const result = await client.execute(query, [id], { prepare: true });
  return result.rows[0];
};

exports.updateProduct = async (id, updates) => {
  const query =
    'UPDATE products SET name = ?, description = ?, price = ?, category = ? WHERE product_id = ?';
  const params = [
    updates.name,
    updates.description,
    updates.price,
    updates.category,
    id,
  ];
  await client.execute(query, params, { prepare: true });
};

exports.deleteProduct = async (id) => {
  const query = 'DELETE FROM products WHERE product_id = ?';
  await client.execute(query, [id], { prepare: true });
};
