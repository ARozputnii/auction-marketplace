import express from 'express';
import mongoose from 'mongoose';
import { PORT, DB_URL } from './config/dotenv.js';

const app = express();

try {
  mongoose.connect(DB_URL).then(() => {
    app.listen(PORT, () => { console.log(`App listening on port ${PORT}\n Press Ctrl+C to quit.`); });
  });
} catch (e) {
  console.error(e);
}
