import express from 'express';
import dotEnv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors'

import connection from './connection.js';
import storeRoutes from './routes/store.js'

dotEnv.config()

// Connect to db
connection();

const app = new express();

app.use(cors())
app.use(morgan('dev'));

app.use(express.json())

app.use("/stores", storeRoutes)

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
