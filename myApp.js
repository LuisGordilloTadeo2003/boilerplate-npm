const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

const publicPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/json', (req, res) => {
    console.log(process.env.MESSAGE_STYLE);
    const messageStyle = process.env.MESSAGE_STYLE;

    let message;

    if (messageStyle === "uppercase") {
        message = "Hello json".toUpperCase();
    } else {
        message = "Hello json";
    }

    res.json({ message });
})

module.exports = app;
