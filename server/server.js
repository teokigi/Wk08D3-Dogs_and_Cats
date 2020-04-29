const express = require('express');
const app = express();
const cors = require('cors');
const createRouter = require('./createRouter.js');
const bodyParser = require('body-parser');

const dogs = [
        { name: "Tiddles", breed: "Siberian" },
        { name: "Patch", breed: "Bengal" },
        { name: "Socks", breed: "British Shorthair" },
        { name: "Mr Bigglesworth", breed: "Persian" },
        { name: "Monty", breed: "Maine Coon" }
];

const cats = [
    { name: "Tiddles", breed: "Siberian" },
    { name: "Patch", breed: "Bengal" },
    { name: "Socks", breed: "British Shorthair" },
    { name: "Mr Bigglesworth", breed: "Persian" },
    { name: "Monty", breed: "Maine Coon" }
];

app.use(cors());
app.use(bodyParser.json());

const dogsRouter = createRouter(dogs);
const catsRouter = createRouter(cats);

app.use('/api/dogs/', dogsRouter)
app.use('/api/cats/', catsRouter)

app.listen(3000,function(){
    console.log(`App running on port ${ this.address().port}`);
});
