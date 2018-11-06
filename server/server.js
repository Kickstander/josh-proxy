const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(PORT, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Proxy listening at 3000...');
});