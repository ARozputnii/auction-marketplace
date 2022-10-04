import express from 'express';
import { PORT } from './config/dotenv.js';
import './config/database.js';
import router from './config/routes.js';

const app = express();

app.use(express.json());
app.use('/api', router);

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(`Server running on port: ${PORT}; 
        --- Running on ${process.env.NODE_ENV} environment;
        --- Press Ctrl+C to quit.`);
  }
});
