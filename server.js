const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 5000;


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get('/fetch_videos', (req, res) => {
    const dir = path.join(__dirname, '/src/api/data');
    const data = fs.readdirSync(dir)
        .filter(file => path.extname(file) === '.json')
        .map(name => require(path.join(dir, name)));

    const joinedData = data[0].concat(data[1]);
    res.send(joinedData);
});