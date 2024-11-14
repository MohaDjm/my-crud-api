const cassandra = require('cassandra-driver');
require('dotenv').config();

// Create a Cassandra client with connection details
const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'test_keyspace',
});

// Connect to the Cassandra cluster
client
  .connect()
  .then(() => console.log('Connected to Cassandra'))
  .catch((err) => console.error('Failed to connect to Cassandra', err));

// Export the client for use in other modules
module.exports = client;
