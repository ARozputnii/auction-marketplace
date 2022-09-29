import * as dotenv from 'dotenv';

dotenv.config();

if (process.env.NODE_ENV === 'dev') {
  dotenv.config({ path: '.env' });
} else {
  dotenv.config({ path: '.env.test' });
}

const { PORT } = process.env;
const { DB_URL } = process.env;

export { PORT, DB_URL };