const express = require('express');
const path = require('path');
var compression = require('compression')

const app = express();
const port = 8080;

// Serve static files from the 'output' directory
app.use(compression())
app.use('/output', express.static(path.join(__dirname, 'output')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

