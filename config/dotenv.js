import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'dev') {
  dotenv.config({ path: '.env' });
} else {
  dotenv.config({ path: '.env.test' });
}

export const {
  PORT, DB_URL, JWT_SECRET, SMTP_USER, SMTP_PASSWORD,
} = process.env;
