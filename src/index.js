const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const favicon = require('serve-favicon');

const app = express();
// const port = 3000;

const route = require('./routes/index.router');
const db = require('./config/db');

// Connect db
db.connect();

//file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

//favicon
app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));
// xử lí dữ liệu gửi đi từ phía client lên sever.
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//http logger
app.use(morgan('combined'));
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resoures/views'));

route(app);
// app.get("/news", (req, res) => {
//   res.render("news");
// });
const port = process.env.PORT;
app.listen(port, () =>
    console.log(`Example app listening at htpp://localhost:${port}`),
);
