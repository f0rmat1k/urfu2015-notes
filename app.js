'use strict';

const path = require('path');

const express = require('express');
const app = express();

const hbs = require('hbs');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const viewsDir = path.join(__dirname, 'bundles');
const publicDir = path.join(__dirname, 'public');

app.set('views', viewsDir);
app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(express.static(publicDir));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

/* eslint max-params: [2, 4] */
app.use((err, req, res, next) => {
    console.error(err);

    next();
});

app.use((req, res, next) => {
    req.commonData = {
        meta: {
            description: 'Awesome notes',
            charset: 'utf-8'
        },
        page: {
            title: 'Awesome notes'
        }
    };

    next();
});

require('./routes')(app);

hbs.registerPartials(path.join(__dirname, 'blocks'));

app.listen(8080, () => console.log('Listening on port 8080'));

module.exports = app;
