// Imports
const express = require('express');
const morgan = require('morgan');

const routes = require('./routes/public');

const app = express();

app.use('/get-meta-data', express.static('public',{index:false, extensions:['json']}));

app.use(morgan('tiny'));

// Bodyparser
app.use(express.json());

app.use(routes);

app.use(function(req, res, next){
  res.status(404).json({ error: 'Not found' })
});

app.listen(3000, () => console.log('Server Connected'));
