const express = require("express");
const morgan = require("morgan");
const { db, Page, User } = require('./models');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
 
db.authenticate() 
  .then(() => { 
    console.log('connected to the database'); 
});

app.get("/", (req, res) => {
    res.send('');
  })

async function init (){
    try {
    await db.sync({ force: true }); 
    // await Page.create({title: 'valeriia'})
    } catch (err){
        console.error(err)
}}

init();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
