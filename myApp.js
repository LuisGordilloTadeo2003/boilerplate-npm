const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

const publicPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((req, res, next) => {
    const method = req.method;
    const path = req.path;
    const ip = req.ip;

    const logString = `${method} ${path} - ${ip}`;

    console.log(logString);

    next();
});

app.get(
    "/now",
    (req, res, next) => {
        req.time = new Date().toString();
        next();
    },
    (req, res) => {
        res.send({
            time: req.time
        });
    }
);



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
