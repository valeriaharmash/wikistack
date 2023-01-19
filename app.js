const express = require('express');
const morgan = require('morgan');
const { db, Page, User } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/wiki', wikiRouter);
app.use('/user', userRouter);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.get('/', (req, res, next) => {
  try {
    res.redirect('/wiki');
  } catch (error) {
    next(error);
  }
});

app.use('*', (req, res) => {
  res.status(404).send(' 404 Page not found on the server');
});

async function init() {
  try {
    await db.sync({ force: true });
    // await Page.create({title: 'valeriia'})
  } catch (err) {
    console.error(err);
  }
}

init();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
