const path = require('path');
const express = require('express');
const morgan = require('morgan');
const expressHandlebars = require('express-handlebars');
const app = express(); // instance
const port = 3000;
const db = require('./config/db');

// connect to db
db.connect();

const route = require('./routes');

// http logger
// app.use(morgan('combined'));

// apply middleware(xử lý dự liệu từ form submit)
app.use(
    express.urlencoded({
        extended: true,
    }),
);
// case: sử dụng code js để submit
// XML HTTP request, fetch, axios (gửi get post đều được k gửi dạng form)
app.use(express.json());

// template engine
// re-define short expand from handlebars to hbs
const hbs = expressHandlebars.create({
    extname: '.hbs',
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));
// console.log('PATH: ', path.join(__dirname, 'resource/views'));

//config static image (locahost:3000/img/logo.png)
app.use(express.static(path.join(__dirname, 'public')));

//Home, search, contact
// route init
route(app);

// 127.0.0.0 - mapping to brow (localhost)
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
