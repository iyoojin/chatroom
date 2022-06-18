const { Pool } = require('pg');

const PG_URI =
  'postgres://twhgikud:iqVMlIZabViDU_ebbNqdxur-XBIwNevm@jelani.db.elephantsql.com/twhgikud';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
