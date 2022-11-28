const express = require('express');
const logger = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const apiRouter = require('./routes/index');

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/api/v1/', apiRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
