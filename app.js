const express = require('express');
const app = express();
const router = require('./router');
const welcome = require('./module-practice.js')

app.use('/', router);
console.log(welcome('Onkur'));
app.listen(3001)