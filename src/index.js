const path = require('path');
const express = require("express");
const morgan = require('morgan');
const {engine} = require("express-handlebars");

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));
//http logger
app.use(morgan('combined'));
app.engine("hbs", engine({
    extname: '.hbs'
}));
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, 'resoures/views'));

app.get("/", (req, res) => {
    res.render('home');
});

app.get("/news", (req, res) => {
  res.render("news");
});
app.listen(port, ()=> console.log(`Example app listening at htpp://localhost:${port}`));