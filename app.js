require('dotenv').config();

const express = require ('express');
const logger = require('morgan');

require('./config/db.config');
require('./config/hbs.config');

const app = express ();

app.set('view engine','hbs');
app.set('views', `${__dirname}/views`);

app.use(express.urlencoded({extended:false}));

app.use(logger('dev'));

const routes = require('./config/routes.config');
app.use('/', routes)


const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App listening at port ${port}`))