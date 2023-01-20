const express = require('express');
const morgan = require('morgan');
const { db } = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');
const PORT = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/wiki', wikiRouter);
app.use('/users', userRouter);

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
    // this drops all tables then recreates them based on our JS definitions
    // await db.sync({ force: true });
    await db.sync();
    app.listen(PORT, () => {
      console.log(`App listening in port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

init();
