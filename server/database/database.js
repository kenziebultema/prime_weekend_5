/**
 * Created by ulaeulaeulae on 1/22/16.
 */
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/weekend_challenge';

var client = new pg.Client(connectionString);

client.connect();