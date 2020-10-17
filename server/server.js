// budget api
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

 app.get('/budget', (req, res) => {
    const data = require('./budget');
    res.json(data);
 });

 app.listen(port, () => {
    console.log('API served at http://localhost:5000');
 });