let express = require('express');
let app = express();

const publicPath = path.join(__dirname, 'public');
app.use('/public', express.static(publicPath));

app.get('/', (req, res) => {
    absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath)
});

module.exports = app;
