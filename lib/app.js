const express = require('express');

const { cats } = require('./cats-data');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;

app.use('/hello', (req, res) => {
  res.send('hello world! testing change');
});

app.use('/cats/:id', (req, res) => {
  let match;
  for (const cat of cats) {
    if (cat.id === req.params.id) {
      match = cat;
    }
  }
  return res.json(match);
});

app.use('/cats', (req, res) => {
  const filteredData = [];
  for (const cat of cats) {
    filteredData.push({ id: cat.id, name: cat.name });
  }
  res.json(filteredData);
});
