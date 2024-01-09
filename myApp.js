const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const publicPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/json', (req, res) => {
    const messageStyle = process.env.MESSAGE_STYLE;
  
    let msg = 'Hello json';
  
    if (messageStyle == 'uppercase') {
      msg.toUpperCase();
    } else {
        msg.toLowerCase();
    }
  
    res.json({ msg });
})

module.exports = app;
