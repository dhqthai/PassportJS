const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');

const port = 3001;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extend: true}));
app.use(passport);

// Route
app.get('/', (req, res) => res.render('index'));

app.route('/login')
.get((req, res) => res.render('login'))
.post();

app.listen(port, () => console.log(`Running ... ${port}`))
