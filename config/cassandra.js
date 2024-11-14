const cassandra = require('cassandra-driver');
require('dotenv').config();

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'test_keyspace',
});

client
  .connect()
  .then(() => console.log('Connected to Cassandra'))
  .catch((err) => console.error('Failed to connect to Cassandra', err));

module.exports = client;
