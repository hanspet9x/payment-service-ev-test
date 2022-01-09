const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

app.post('form', (req, res) => {
    const data = JSON.stringify(req.body) + "\n\n";
    console.log(data);
    fs.appendFile('file.txt', data, (err) => {
        console.log(err);
    });

    res.status(200).send(data);
})

app.listen(4000, () => {
    console.log('listening');
});