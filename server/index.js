require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./routes');
const morgan = require('morgan');

const app = express();
const { PORT } = process.env;

app.use(morgan('dev'));
app.use(express.json());
app.use('/api', router);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`Server Listening at http://localhost:${PORT}`);
});
