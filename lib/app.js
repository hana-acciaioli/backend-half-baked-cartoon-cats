const express = require('express');

// moved to controllers > cats.js

// const { cats } = require('./cats-data');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/cats', require('./controllers/cats'));
module.exports = app;

// moved to controllers > cats.js

// app.use('/cats/:id', (req, res) => {
//   let match;
//   for (const cat of cats) {
//     if (cat.id === req.params.id) {
//       match = cat;
//     }
//   }
//   return res.json(match);
// });

// app.use('/cats', (req, res) => {
//   const filteredData = [];
//   for (const cat of cats) {
//     filteredData.push({ id: cat.id, name: cat.name });
//   }
//   res.json(filteredData);
// });
